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
      <div
        style={{
          padding: "2rem",
          justifyContent: "center"
        }}
      >
        <img
          style={{
            borderRadius: "100%",
            width: "7rem"
          }}
          alt={this.props.mode}
          src={iconObj[this.props.mode]}
        />
      </div>
    );
  }
}

export default ImageHelper;
