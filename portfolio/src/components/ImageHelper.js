import saicImg from '../images/saic-logo.png';
import averittImg from '../images/averitt.png';
import profileImg from '../images/profile.jpg';
import iconImg from '../images/favicon.png';
import React from 'react';

const iconObj = {
  'saic': saicImg,
  'averitt': averittImg,
  'profile': profileImg,
  'icon': iconImg
};

class ImageHelper extends React.Component {
  render() {
    return (
      <img
        style={{
          borderRadius: '100%',
          width: this.props.width,

          justifyContent: 'center'
        }}
        alt={this.props.mode}
        src={iconObj[this.props.mode]}
      />
    );
  }
}

ImageHelper.defaultProps = {
  width: '7rem'
};

export default ImageHelper;
