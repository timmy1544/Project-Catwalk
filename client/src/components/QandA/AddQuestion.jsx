/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function AddQuestion(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ask Your Question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          Your Question:
          {' '}
          <input type="text" />
          <br />
          <br />
          Nickname:
          {' '}
          <input type="text" />
          <br />
          <br />
          Your Email:
          {' '}
          <input type="text" />
          <br />
          <br />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddQuestion;