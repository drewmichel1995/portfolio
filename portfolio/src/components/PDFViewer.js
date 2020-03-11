import React, { useState } from "react";
import {
  Button,
  Modal,
  ButtonGroup,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import ImageHelper from "./ImageHelper";

export default function EmailModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a onClick={handleShow}>Resume</a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="email-color">
          <Modal.Title className="white-text">Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ImageHelper mode="resume" borderRadius="1rem" width="100%" />
        </Modal.Body>
        <Modal.Footer className="email-color justify-content-center">
          <Button
            variant="primary"
            href="/server/portfolioinfo/resume"
            target="__blank"
          >
            View
          </Button>
          <DropdownButton
            as={ButtonGroup}
            title="Download"
            id="bg-nested-dropdown"
            variant="secondary"
          >
            <Dropdown.Item
              variant="secondary"
              href="/server/portfolioinfo/resumepdf"
            >
              PDF
            </Dropdown.Item>
            <Dropdown.Item
              variant="primary"
              href="/server/portfolioinfo/resumeword"
            >
              Word
            </Dropdown.Item>
          </DropdownButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}
