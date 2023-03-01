import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./DeleteJobPopup.less";
import Alert from "react-bootstrap/Alert";

export default function DeleteJobPopup(props) {
  let { show, setShowDelete, updatePosts, jobId } = props.info;

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => {
    setShowDelete(false);
    setShowSuccess(false);
    setShowError(false);
  };
  const handleEdit = (e) => {
    setShowSuccess(false);
    setShowError(false);

    e.preventDefault();

    fetch(
      "https://jobapplicationsapi.azurewebsites.net/api/JobPostsAPI/" + jobId,
      {
        method: "DELETE",
      }
    ).then((response) => {
      if (response.ok) {
        setShowSuccess(true);
        updatePosts();
      } else {
        setShowError(true);
      }
    });
  };

  return (
    <Modal show={show} onHide={handleClose} className="popup">
      <Form onSubmit={handleEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Job Posting</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this job post?</Modal.Body>
        <Modal.Footer>
          <Alert
            variant="success"
            className="alert"
            style={showSuccess ? { display: "block" } : { display: "none" }}
          >
            Your job post has been deleted!
          </Alert>
          <Alert
            variant="danger"
            className="alert"
            style={showError ? { display: "block" } : { display: "none" }}
          >
            Something went wrong. Please try again.
          </Alert>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="btn-danger" type="submit">
            Delete Job
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
