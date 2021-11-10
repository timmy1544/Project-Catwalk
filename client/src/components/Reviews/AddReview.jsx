import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import AddReviewItem from './AddReviewItem';

const AddReview = (props) => {
  const {
    currentID, getReviews, charItem, onHide, show,
  } = props;

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Write a New Review
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <AddReviewItem currentID={currentID} getReviews={getReviews} charItem={charItem} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReview;