import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LazyLoad from 'react-lazy-load';
import { FaThumbsUp } from 'react-icons/fa';
const Recipe = ({Chef}) => {
    let {id ,likes,chef_picture,description,chef_name,years_of_experience,number_of_recipes}=Chef;

    return (
        <div >
              <Container>
      <Row className='align-items-center'>

        <Col sm={12} md={12} >
        <h3 className='fw-bold display-5 text-start py-4 '>
           Discover  Chef: <span className='text-danger'> {chef_name}</span>
           </h3>
            <div className='rounded-start-pill'>
            <LazyLoad  height={500} >
 <img src={chef_picture} alt="" className=' img-fluid rounded-5 ' /></LazyLoad> 
            </div>
           

        </Col>
        <Col sm={12} md={12}>
         <h2 className='py-3'>Short bio</h2>
           <p className='fs-5'>{description}</p>
           <p> Peoples like - <FaThumbsUp/> <span className='text-danger fw-bold'>  {likes}</span> </p>
           <p>  Number of recipes - <span className='text-danger fw-bold'> {number_of_recipes}  </span> </p>
           <p>  Experience - <span className='text-danger fw-bold'> {years_of_experience} years  </span> </p>

        
        </Col>
        
      </Row>
    </Container>


  


        </div>
    );
};

export default Recipe;