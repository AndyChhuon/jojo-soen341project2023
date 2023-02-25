import "./JobPopup.less";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function JobPopup() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col xs={3} md={3} sm={3} className="center-button">
        <Button
          className="button"
          variant="secondary"
          size="sm"
          onClick={handleShow}
        >
          View More
        </Button>
      </Col>
      <Modal show={show} onHide={handleClose} className="popup">
        <Modal.Header closeButton>
          <Modal.Title>Apply to Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Software Developer</h2>

          <div className="subtitle-container">
            <p className="padding-5">Samsung Ads</p>
          </div>
          <p1>Montreal, QC • Remote</p1>
          <p1 className="new-line">Full-time</p1>
          <Form.Group controlId="formFileSm" className="mb-3 upload">
            <p className="padding-5">📝 Cover Letter (PDF)</p>

            <Form.Control type="file" accept="application/pdf" size="sm" />
          </Form.Group>
          <h3 className="job-detail">Job detail</h3>
          <p3>&#x1F4BC; Job type</p3>
          <div className="job-type-tags">
            <span className="job-type-tag">Full-time</span>
            <span className="job-type-tag">Remote</span>
          </div>

          <h2 className="padding-5 padding-3-bottom">Benefits</h2>
          <div className="job-type-tags">
            <span className="job-type-tag">Dental care</span>
            <span className="job-type-tag">Paid time off</span>
          </div>
          <h3 className="padding-5">Full Job Description</h3>
          <p3>Software Developer</p3>
          <p3>Life at Sam sung Ads</p3>
          <p2>add any thing you want</p2>
          <p>This is the content of the popup box.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Apply Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
