import "./JobPost.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function JobPosts(props) {
  const {
    jobTitle,
    jobDescription,
    jobCategory,
    jobLocation,
    jobCompany,
    jobDate,
  } = props.tempInfo;
  return (
    <Container className="JobPost">
      <Row>
        <Col xs={9} md={9} sm={9}>
          <Container>
            <Row className="top-row">
              <Col>
                <h6 className="job-title">{jobTitle}</h6>
              </Col>
              <Col>
                <h6 className="job-description">{jobDescription}</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="job-about">Category: {jobCategory} </h6>
              </Col>
              <Col>
                <h6 className="job-about">Location: {jobLocation}</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6 className="job-about">Company: {jobCompany}</h6>
              </Col>
              <Col>
                <h6 className="job-about">Date: {jobDate}</h6>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={3} md={3} sm={3} className="center-button">
          <Button className="button" variant="secondary" size="sm">
            Apply Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
