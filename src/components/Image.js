import React from 'react';

const Image = (props) => {
  return (
    <div>
      <img className="carImages" src={props.carImage} alt="car"/>
    </div>
  )
}

export default Image;