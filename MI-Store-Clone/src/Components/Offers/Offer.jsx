import React from 'react';
import Offers from './Offers';
import "./offers.css";
import Row from 'react-bootstrap/Row';


const Offer = ({offer}) => {
    console.log("offers", offer)
    return (
        <div className="offer_section">
            <div className="container">
            <Row xs={1} md={3} className="g-4">
            {
                offer.map((item, index) => (
                    <Offers key={item.image} index={index} src={item.image} link={item.url} />
                ))
            }
                </Row>
            </div>
            </div>
    )
}

export default Offer