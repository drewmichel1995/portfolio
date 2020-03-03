import React from "react";
import { Row } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import EmailModal from "./EmailModel";

const SocialRow = () => {
  return (
    <Row className="nopadding justify-content-center">
      <SocialIcon
        url="https://github.com/drewmichel1995"
        className="social-row"
        bgColor="#dcdcdc"
      />

      <SocialIcon
        url="https://www.linkedin.com/in/drew-michel-4a1766123"
        className="social-row"
        bgColor="#dcdcdc"
      />

      <EmailModal />
    </Row>
  );
};

export default SocialRow;
