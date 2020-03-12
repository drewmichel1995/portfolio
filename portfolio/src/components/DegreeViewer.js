import React, { useState } from 'react';
import {
  Button,
  Modal,
  ButtonGroup,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';
import ImageHelper from './ImageHelper';

export default function DegreeViewer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Degree
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="email-color">
          <Modal.Title className="white-text">Degree</Modal.Title>
        </Modal.Header>
        <Modal.Body className="justify-content-center bg-gainsboro">
          <ImageHelper mode="degree" borderRadius="none" width="100%" />
        </Modal.Body>
      </Modal>
    </>
  );
}
