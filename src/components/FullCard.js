import React from 'react';
import MidSection from './MidSection';
import BottomSection from './BottomSection';

const FullCard = (props) => {
  return (
    <div className="fullcard">
      <MidSection carImage = {props.carImage} originalPrice = {props.originalPrice} currentPrice = {props.currentPrice} save = {props.save}/>
      <BottomSection make = {props.make} numberDoors = {props.numberDoors} gearbox = {props.gearbox} fuelType = {props.fuelType} model = {props.model}/>
    </div>
)
}

export default FullCard;