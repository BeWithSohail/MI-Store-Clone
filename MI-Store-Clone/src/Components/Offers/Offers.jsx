import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
const Offers = ({ src, link, index }) => {
    // console.log("src", src)
    // console.log("link", link)
    // console.log("index", index)
    return (
            <a href={link} target='_blank'>
                <Col>
                    <Card>
                    <Card.Img variant="top" src={src} />
                    </Card>
                </Col>
            </a>
         )
}

export default Offers