import React from 'react';

const BottomSection = (props) => {
  return (
    <div>
      <h2 className="make"> {props.make}</h2>
      <p className="carDetails"> {props.numberDoors} doors {props.gearbox} {props.fuelType} {props.model}</p>
      <p className="newStock">BRAND NEW - IN STOCK</p>
    </div>
  )
}

export default BottomSection;