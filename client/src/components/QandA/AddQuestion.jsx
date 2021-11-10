/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Modal from 'react-bootstrap/Modal';

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
          Your Question
          <br />
          <input type="text" />
          <br />
          <br />
          Nickname
          <br />
          <input type="text" />
          <br />
          <br />
          Your Email
          <br />
          <input type="text" />
          <br />
          <br />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button type="button" onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddQuestion;