import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Col, Row, Card } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";
import profileImg from "../images/profile.jpg";

const Container = styled(motion.div)`
  width: 400px;
  margin: 4rem auto auto auto;
  padding: 3rem;
  border-radius: 1rem;
  font-family: "Arial", "Helvetica", sans-serif;
  background-color: #fff;
  position: relative;
`;

const AvatarPic = styled(motion.img)`
  width: 100%;
  border-radius: 100%;
`;

const InfoContainer = styled(motion.div)`
  justify-content: center;
`;

const Heading = styled(motion.h2)`
  font-weight: 200;
  text-align: center;
`;

const SubHeading = styled(motion.h5)`
  font-weight: 200;
  text-align: center;
  justify-content: center;
`;

const variants = {
  container: {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  },
  scaleAndRot: {
    hidden: { scale: 0, rotate: "90deg" },
    visible: { scale: 1, rotate: "0deg" }
  },
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  opacityAndY: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }
};

const IntroductionCard = ({ person }) => {
  return (
    <Container initial="hidden" animate="visible" variants={variants.container}>
      <AvatarPic
        src={profileImg}
        alt={person.name}
        variants={variants.scaleAndRot}
      />

      <InfoContainer>
        <Heading>{person.name}</Heading>

        <SubHeading>{person.jobTitle}</SubHeading>

        <SubHeading>{person.location}</SubHeading>
        <Row className="justify-content-md-center">
          <Col>
            <SocialIcon url="https://github.com/drewmichel1995" />
          </Col>
          <Col>
            <SocialIcon url="https://www.linkedin.com/in/drew-michel-4a1766123" />
          </Col>
          <Col>
            <SocialIcon network="email" />
          </Col>
        </Row>
      </InfoContainer>
    </Container>
  );
};

export default IntroductionCard;
