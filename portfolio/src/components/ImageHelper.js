import saicImg from "../images/saic-logo.png";
import averittImg from "../images/averitt.png";
import profileImg from "../images/profile.jpg";
import React from "react";

const iconObj = {
  "saic": saicImg,
  "averitt": averittImg,
  "profile": profileImg
};

class ImageHelper extends React.Component {
  render() {
    return (
      <img
        style={{
          borderRadius: "100%",
          width: "7rem",

          justifyContent: "center"
        }}
        alt={this.props.mode}
        src={iconObj[this.props.mode]}
      />
    );
  }
}

export default ImageHelper;
