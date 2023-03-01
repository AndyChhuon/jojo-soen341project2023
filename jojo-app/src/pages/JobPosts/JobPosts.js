//Sudent form component
import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./JobPosts.less";
import jobPostSearch from "../../Images/jobPostSearch.jpg";
import JobPost from "../../Components/JobPost/JobPost";
import Spinner from "react-bootstrap/Spinner";

export default function JobPosts() {
  //Blur Search bar
  const [blurSearch, setBlurSearch] = useState(false);
  const [search, setSearch] = useState("");

  const onSearchBarClick = (event) => {
    setBlurSearch(true);
  };
  const onSearchBarBlur = (event) => {
    setBlurSearch(false);
  };
  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const loading = (
    <div className="jobs-loading-container">
      <span className="search-text">Searching...</span>
      <Spinner animation="border" size="sm" />
    </div>
  );

  const [jobPosts, setJobPosts] = useState([loading]);
  //Fetch api search state
  useEffect(() => {
    if (search === "") {
      fetch("https://jobapplicationsapi.azurewebsites.net/api/JobPostsAPI", {
        method: "GET", // default, so we can ignore
      })
        .then((response) => response.json())
        .then((data) => {
          let jobs = data.map((info) => (
            <JobPost key={info.jobId} info={info} />
          ));
          setJobPosts(jobs);
        });
    } else {
      fetch(
        "https://jobapplicationsapi.azurewebsites.net/api/JobPostsAPI/search/" +
          search,
        {
          method: "GET", // default, so we can ignore
        }
      )
        .then((response) => response.json())
        .then((data) => {
          let jobs = data.map((info) => (
            <JobPost key={info.jobId} info={info} />
          ));
          setJobPosts(jobs);
        });
    }
  }, [search]);

  return (
    <div className="JobPostsContainer">
      <Container className="jobPosts">
        <Row>
          <Col md={3}>
            <h1 className="titleBlue">Find Your Jobs</h1>
          </Col>
        </Row>
      </Container>
      <Container className="jobPostsSearch">
        <img
          className="jobPostsSearchImg"
          src={jobPostSearch}
          style={blurSearch ? { filter: "blur(5px)" } : {}}
        ></img>
        <Container className="searchJobPost">
          <div className="searchOverlay">
            <input
              className="searchBar"
              onFocus={onSearchBarClick}
              onBlur={onSearchBarBlur}
              placeholder="Search.."
              onChange={onSearchChange}
            ></input>
          </div>
        </Container>
      </Container>
      <Container className="Jobs-Header">
        <h3 className="jobs-text">Recent Jobs</h3>
      </Container>
      <Container className="padding-0">
        {jobPosts.length > 0 ? (
          jobPosts
        ) : (
          <div className="no-found">
            <Container className="no-found">No jobs found</Container>
          </div>
        )}
      </Container>
    </div>
  );
}
