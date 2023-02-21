//Sudent form component
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./JobPosts.less";
import jobPostSearch from "../Images/jobPostSearch.jpg";

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
      </Container>
    </>
  );
}
