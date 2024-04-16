import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./starproduct.css"


const StarProducts = ({ StarProducts }) => {
  console.log("star products", StarProducts);
  return (
      <div className='starProducts'>
          <div className="container">
        <Row xs={1} md={2} className="g-4">
          <a href={StarProducts[0].url}>
                <Col>
                  <Card>
                    <Card.Img variant="top" src={StarProducts[0].image} />
                  </Card>
              </Col>
              </a>
          <Col>
          <Row xs={1} md={2} className="g-4">
              <Card>
                <Card.Img variant="top" src={StarProducts[1].image} />
      
              </Card>
              <Card>
                <Card.Img variant="top" src={StarProducts[2].image} />
              </Card>
            </Row>
            <Row xs={1} md={1} className="g-4">
             <Card>
                <Card.Img variant="top" src={StarProducts[3].image} />
              </Card>
            </Row>
          </Col>
        
        </Row>
        
     
          </div>
      </div>
  )
}

export default StarProducts;