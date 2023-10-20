import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  FaFire,    FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { Authcontext } from '../Authentication page/AuthCenter/AuthCenter';
import  '../index.css';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const Header = () => {
  let {user,logout}=useContext(Authcontext);

let signOut=()=>{
  logout().then(() => {

  }).catch((error) => {
  
  });
  
}

    return (
        <div>



            <Navbar collapseOnSelect expand="lg" bg="body" variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-uppercase'> <span className='fs-3 text-danger'><FaFire /></span> Spice-Society </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
         
          <Nav className='ms-auto align-items-center  '>
   
  <li className="nav-item">
    <NavLink className="nav-link active-link" to='/' activeClassName="active" >HOME</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link " activeClassName="active" to='/blog' >BLOG</NavLink>  </li>
 
  <li className="nav-item">
  <div className="nav-link"  >
    {user?<>
     { user.photoURL ?
      <img src={user.photoURL} data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} style={{width:'50px' ,borderRadius:'50px'}} />:
      <FaUserCircle className='fs-2'/>
     }<Tooltip id="my-tooltip" />
     <span className='btn'  onClick={signOut}>Logout</span>
      </> : 
     <NavLink to='/login' activeClassName="active" className='nav-link text-decoration-none text-uppercase text-dark'>LOgin</NavLink>
  }
    </div>  </li>


          </Nav>

        

        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;