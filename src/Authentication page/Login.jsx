import React, { useContext, useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from './AuthCenter/AuthCenter';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  let { signin, google, github } = useContext(Authcontext);
  let [error, Seterror] = useState('')
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || '/login';
  let handlelogin = e => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    signin(email, password)
      .then((userCredential) => {
        const loguser = userCredential.user;
        console.log(loguser);
        toast(" Log in success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        Seterror('');
        navigate(from, { replace: true });
      }

      )
      .catch((error) => {

        const errorMessage = error.message;
        Seterror(errorMessage)
      });




  }

  let Gsingin = () => {
    google().then((result) => {
      const guser = result.user;
      Seterror('');
      toast(" Log in success", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      console.log(guser);
      navigate(from, { replace: true });
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Seterror(errorMessage);
    });


  }

  let Gitsingin = () => {
    github().then((result) => {
      const gituser = result.user;
      toast(" Log in success", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      navigate(from, { replace: true });
      Seterror('');

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Seterror(errorMessage);
    });

  }

  return (

    <div className='mx-auto my-5 h-100' style={{ maxWidth: '70%' }}>




      <Card className=' mx-auto  my-5 ' >
        <div className='pt-4'>
          <h1 className='text-center text-dark fw-bold text-uppercase'>Log IN NOw</h1>
        </div>
        <form onSubmit={handlelogin} className='m-5'>
          <div className="mb-3 w-100">
            <label className="form-label">Email address</label>
            <input type="email" placeholder='Enter your email' required className="form-control" name='email' id="exampleInputEmail1" />
          </div>
          <div className="mb-3 w-100">
            <label className="form-label">Password</label>
            <input type="password" placeholder='Enter your password' className="form-control" name='password' required id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-dark w-100">Submit</button>
          <p className='text-center text-uppercase pt-2'>Or Sign In with</p>

          <div className='d-flex gap-2 justify-content-center'>
            <button className='btn   btn-primary' onClick={Gsingin}> <span><FaGoogle /></span> Google </button>
            <button className='btn  btn-danger' onClick={Gitsingin}> <span><FaGithub /></span> Github </button>
          </div>

          <div className='pt-2 text-center'>
            Don't have any account?  <Link to='/signup' className='text-decoration-none text-danger fw-bold'> Register now </Link>
          </div>


          <p className='py-2 text-danger fw-bold text-uppercase'>{error}</p>
          <ToastContainer />
        </form>
      </Card>






    </div>


  );
};

export default Login;