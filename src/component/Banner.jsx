import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgs from '../assets/hand-drawn-tasty-tequenos-with-sauce_23-2148809453.avif'
import { Button } from 'bootstrap';
const Banner = () => {
    return (
        <div>
            <Container>
      <Row className='align-items-center'>
        <Col sm={12} md={6}>
           <h3 className='fw-bold display-5 text-start '>
           Discover Your Inner Chef: <span className='text-danger'> Delicious Recipes for Every Taste Bud</span>
           </h3>
           <p>Unlock a Deshi of flavor with our delicious recipes. From quick and easy meals to show-stopping dishes, we've got everything you need to satisfy your cravings and impress your guests. Join our community of food lovers and discover your next culinary adventure today!</p>
           <button className='btn btn-danger'>Explore More</button>

        
        </Col>
        <Col sm={12} md={6} >
            <img src={imgs} alt="" className='w-100' />

        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Banner;