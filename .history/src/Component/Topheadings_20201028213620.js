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
                className = ''
                />
                <h1>{props.title} </h1>

            </Col>
            </Row>
      </Container>
    
  );
}
