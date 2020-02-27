import React from 'react';
import Image from './Image';

const MidSection = (props) => {
  return (
    <div>
      <Image carImage = {props.carImage} />
      <p className="originalPrice"> RPP <br /> £{props.originalPrice}</p>
      <p className="currentPrice"> £{props.currentPrice}</p>
      <p className="save"> save <span className="savebox"> £{props.save}</span></p>
    </div>
  )
}

export default MidSection;