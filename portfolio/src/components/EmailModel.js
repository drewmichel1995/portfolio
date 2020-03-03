import React, { useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import ImageHelper from "./ImageHelper";

export default function EmailModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <SocialIcon
        network="email"
        className="social-row cursor-point"
        bgColor="#dcdcdc"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="email-color">
          <Modal.Title className="white-text">
            <ImageHelper mode="icon" width="3rem" />
            Email to Drew Michel
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="email-modal">
          <Form>
            <Form.Group as={Row} controlId="emailSubject">
              <Form.Label column sm="2">
                Subject:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Enter email subject" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="email">
              <Form.Label column sm="2">
                Email Address:
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Text className="text-muted">
                  I'll never share your email with anyone else.
                </Form.Text>
              </Col>
            </Form.Group>

            <Form.Group controlId="emailBody">
              <Form.Label>Email Body:</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="email-color">
          <Button variant="secondary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
