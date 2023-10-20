import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

import {  FaRegThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ChefCard = ({singlechef}) => {


    let {id ,likes,chef_picture,chef_name,years_of_experience,number_of_recipes}=singlechef;

    return (
        <div>
          
  <div className="col  h-100">
    <div className="card  rounded-5">
      
 
        <img src={chef_picture} className="img-thumbnail  rounded-5" />
     
      <div className="card-body m-2 ">
      
        <h5 className="card-title">{chef_name}</h5>
        <p className=" fs-semibold">Experience:{years_of_experience} years</p>
        <p className=" fs-semibold"><FaRegThumbsUp/>  {likes} </p>
        <p className=" fs-semibold">number of recipes :{number_of_recipes} </p>
        <Link to={`/chef/${id}`}>
        <button className='btn btn-outline-danger fw-bold'>View Recipes</button>
        </Link>
        
      
      </div>
    </div>
  </div>
  



        </div>
    );
};

export default ChefCard;