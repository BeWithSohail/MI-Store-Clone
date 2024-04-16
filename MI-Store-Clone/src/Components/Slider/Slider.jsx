import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Slider = ({start}) => {
    console.log("start", start);
  return (
      <Carousel>
          {
              start.map((value, item, index) => (
                //   console.log("value is", value);
                <Carousel.Item key={item}>
                <img
                    src={value}
                    alt="firstslide"
                  className='d-block w-100'    
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                 </Carousel.Item> 
              ))
          }


  </Carousel>
  )
}

export default Slider