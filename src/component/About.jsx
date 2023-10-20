import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgs from '../assets/slices-pepperoni-pizza-hand-drawn-sketch-vector-illustration_460848-15396.avif'
const About = () => {
    return (
        <div>
                <Container>
      <Row className='align-items-center'>
      
        <Col sm={12} md={6} >
            <img src={imgs} alt="" className='w-100' />

        </Col>  
        <Col sm={12} md={6}>
           <h2 className='fw-bold  text-start '>
           <span className='text-danger'> SpiceSociety: </span> A Website for Passionate Home Cooks and Food Lovers
           </h2>
           <p>SpiceSociety, a website where you can find delicious and easy recipes for every occasion. Whether you are looking for breakfast, lunch, dinner, dessert, or snacks, we have something for you. Our recipes are created by passionate home cooks who love to share their culinary creations with the world. You can browse our categories, search by ingredients, or check out our featured recipes. You can also rate, comment, and save your favorite recipes for later. </p>

        
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default About;