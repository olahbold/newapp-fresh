import React from 'react';
import { Row } from 'react-bootstrap';
import { Container,Row,Col,Image } from 'react-bootstrap';

export default function TopHeading(props) {
  return (
      <Container fluid>
            <Row>
            <Col>
                <Image 
                src = "public\Pictures\profilepics.jpeg"
                alt = "Profile Pics"
                />
                <h1> </h1>

            </Col>
            </Row>
      </Container>
    
  );
}
