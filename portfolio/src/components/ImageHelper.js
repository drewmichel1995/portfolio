import saicImg from "../images/saic-logo.png";
import averittImg from "../images/averitt.png";
import profileImg from "../images/profile.jpg";
import iconImg from "../images/favicon.png";
import tntechImg from "../images/tntech.png";
import comptiaImg from "../images/comptia.png";
import devopsImg from "../images/devops.png";
import resumeImg from "../images/resume.jpg";
import React from "react";

const iconObj = {
  "saic": saicImg,
  "averitt": averittImg,
  "profile": profileImg,
  "icon": iconImg,
  "tntech": tntechImg,
  "comptia": comptiaImg,
  "devops": devopsImg,
  "resume": resumeImg
};

class ImageHelper extends React.Component {
  render() {
    return (
      <img
        style={{
          borderRadius: this.props.borderRadius,
          width: this.props.width,

          justifyContent: "center"
        }}
        alt={this.props.mode}
        src={iconObj[this.props.mode]}
        className={this.props.className}
      />
    );
  }
}

ImageHelper.defaultProps = {
  width: "7rem",
  borderRadius: "100%"
};

export default ImageHelper;
