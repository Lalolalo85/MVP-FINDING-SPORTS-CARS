import React from 'react';

const CarItem = (props) => (
  <div>
    <span>{props.item.make}</span>
    <span>{props.item.model}</span>
  </div>
)

export default CarItem;
