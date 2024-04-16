import React from 'react';
import "./hotitem.css";

const Hotitem = ({image,index,name,price}) => {
  return (
      <div className='hotitem'>
          <img src={image} alt={`${index} product`} />
          <p> {name} </p>
          <span> { price} </span>
    </div>
  )
}

export default Hotitem