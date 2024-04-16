import React from 'react';
import Hotitem from '../Hotitem/Hotitem';
import "./hotaccesories.css";


const HotAccesories = ({ music, musicCover,smartDevice,smartDeviceCover }) => {
    // console.log("music", music + " cover",musicCover)
  return (
      <div className='hotaccesories' >
          <div>
              <img src={musicCover} alt="" />
          </div>
        
          <div>
                {
                  music && music.map((item, index) => (
                    <Hotitem key={index} name={item.name} price={item.price} image={item.image} />
                  ))
              }
               {
                 smartDevice && smartDevice.map((item, index) => (
                    <Hotitem key={index} name={item.name} price={item.price} image={item.image} />
                  ))
                }
          </div>
    </div>
  )
}

export default HotAccesories;