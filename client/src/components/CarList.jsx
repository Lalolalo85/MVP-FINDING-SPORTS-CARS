import React from 'react';
import CarItem from './CarItem.jsx'
const CarList = (props) => (
  <div className="cars">
    {props.list.map((item) => <CarItem item={item} key={item.id} />)}
  </div>
)

export default CarList;
