import React from 'react';
import { Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const SocialRow = () => {
  return (
    <Row className="nopadding justify-content-center">
      <SocialIcon
        url="https://github.com/drewmichel1995"
        className="social-row"
      />

      <SocialIcon
        url="https://www.linkedin.com/in/drew-michel-4a1766123"
        className="social-row"
      />

      <SocialIcon network="email" className="social-row" />
    </Row>
  );
};

export default SocialRow;
