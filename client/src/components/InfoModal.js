import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const InfoModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>About PM Accelerator</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        PM Accelerator helps professionals become high-impact product managers through immersive training and mentorship. Visit our LinkedIn page for more details.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InfoModal;
