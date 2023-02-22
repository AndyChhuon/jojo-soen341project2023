//Sudent form component
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./JobPosts.less";
import jobPostSearch from "../Images/jobPostSearch.jpg";
import JobPost from "../Components/JobPost/JobPost";

export default function JobPosts() {
  //usestate
  const [blurSearch, setBlurSearch] = useState(false);
  const onSearchBarClick = (event) => {
    setBlurSearch(true);
    event.target.innerHTML = "";
  };
  const onSearchBarBlur = (event) => {
    setBlurSearch(false);
    if (event.target.innerHTML === "") {
      event.target.innerHTML = "Search..";
    }
  };

  const tempInfoArr = [
    {
      jobTitle: "Software Developer in test",
      jobDescription:
        "Deploy unit tests for our aviation simulation technology.",
      jobCategory: "Software",
      jobLocation: "Montreal, CA",
      jobCompany: "CDPQ",
      jobDate: "2023/04/16",
    },
    {
      jobTitle: "Front-End Developer",
      jobDescription: "Build React Components for UI library.",
      jobCategory: "Software",
      jobLocation: "Montreal, CA",
      jobCompany: "Haivision",
      jobDate: "2023/02/16",
    },
    {
      jobTitle: "Backend Developer",
      jobDescription: "Build REST Api for our web application.",
      jobCategory: "Software",
      jobLocation: "Montreal, CA",
      jobCompany: "Desjardins",
      jobDate: "2023/01/12",
    },
  ];

  return (
    <>
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
            <h5
              className="searchBar"
              onFocus={onSearchBarClick}
              onBlur={onSearchBarBlur}
              contentEditable
            >
              Search..
            </h5>
          </div>
        </Container>
        <Container className="Jobs-Header">
          <h3 className="jobs-text">Recent Jobs</h3>
        </Container>
        {tempInfoArr.map((tempInfo) => {
          return <JobPost tempInfo={tempInfo} />;
        })}
      </Container>
    </>
  );
}
