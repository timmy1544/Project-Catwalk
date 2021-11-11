import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';
import AddReviewItem from './AddReviewItem';

const AddReview = (props) => {
  const {
    currentID, getReviews, charItem, onHide, show,
  } = props;

  const [submit, setSubmit] = useState(false);

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Write a New Review
        </Modal.Title>
        <CloseButton onClick={onHide} />
      </Modal.Header>
      <Modal.Body>
        <div>
          <AddReviewItem
            currentID={currentID}
            getReviews={getReviews}
            charItem={charItem}
            submit={submit}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => { setSubmit(true); }}>Submit</Button>
        <Button variant="secondary" onClick={onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddReview;