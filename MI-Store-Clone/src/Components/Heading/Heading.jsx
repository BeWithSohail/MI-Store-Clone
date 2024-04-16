import React from 'react';
import "./heading.css"

const Heading = ({ text }) => {
    // console.log(text)
  return (
   
      <div className="headingmain">
            <div> </div>
            <span> {text} </span>
            <div> </div>
      </div>
  )
}

export default Heading