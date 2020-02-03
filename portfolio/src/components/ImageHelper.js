import saicImg from '../images/saic-logo.png';
import averittImg from '../images/averitt.png';
import profileImg from '../images/profile.jpg';
import React from 'react';

const iconObj = {
  'saic': saicImg,
  'averitt': averittImg,
  'profile': profileImg
};

const isMobile = window.innerWidth < 480;
const padd = isMobile ? '0rem' : '1rem';
class ImageHelper extends React.Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: padd,

          justifyContent: 'center'
        }}
      >
        <img
          style={{
            borderRadius: '100%',
            width: '7rem',

            justifyContent: 'center'
          }}
          alt={this.props.mode}
          src={iconObj[this.props.mode]}
        />
      </div>
    );
  }
}

export default ImageHelper;
