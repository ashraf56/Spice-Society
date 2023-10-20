import React, { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from './AuthCenter/AuthCenter';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
  let {signin,google,github}=useContext(Authcontext);
  let[error ,Seterror]=useState('')
  let location=useLocation();
  let navigate=useNavigate();
  let from=location.state?.from?.pathname || '/';
let handlelogin = e =>{
    e.preventDefault();
    let form=e.target;
    let email=form.email.value;
    let password=form.password.value;
    signin(email,password)
        .then((userCredential) => {
          const loguser = userCredential.user;
          console.log(loguser);
        Seterror('');
        }
          
          )
        .catch((error) => {
      
          const errorMessage = error.message;
          Seterror(errorMessage)
        });

        navigate(from , {replace:true});


}

let Gsingin =()=>{
  google().then((result) => {
    const guser = result.user;
    Seterror('');
    console.log(guser);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    Seterror(errorMessage);
  });
  navigate(from , {replace:true});

}

let Gitsingin=()=>{
github().then((result) => {
  const gituser = result.user;
  Seterror('');
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  Seterror(errorMessage);
});
navigate(from , {replace:true});
}

    return (

 <div className='  my-5 container'>
   

<h1 className='text-center text-dark fw-bold text-uppercase'>Log IN NOw</h1>

    <Card className='mx-auto w-50 my-5' >

    <form onSubmit={handlelogin}  className='m-5'>
  <div className="mb-3 w-100">
    <label className="form-label">Email address</label>
    <input type="email"  placeholder='Enter your email' required className="form-control" name='email' id="exampleInputEmail1" />
  </div>
  <div className="mb-3 w-100">
    <label className="form-label">Password</label>
    <input type="password" placeholder='Enter your password'  className="form-control" name='password' required  id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-dark w-100">Submit</button>

 <button className='btn w-100' onClick={Gsingin}>Sign in with Google <span><FaGoogle/></span></button>
 <button className='btn w-100' onClick={Gitsingin}>Sign in with Github <span><FaGithub/></span></button>
 <div>
   <Link to='/signup' className='text-decoration-none text-dark'> Register now </Link>
 </div>
 
  <p className='py-2 text-danger fw-bold text-uppercase'>{error}</p>
</form>
    </Card>






</div>

        
    );
};

export default Login;