import React, { useContext, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Authcontext } from './AuthCenter/AuthCenter';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {

  let { createUser } = useContext(Authcontext);
  let [error, Seterror] = useState('')
  let navigate = useNavigate();
  let handleSignup = e => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    let user = form.user.value;
    let url = form.photo.value;

    createUser(email, password)
      .then((userCredential) => {
        const logeduser = userCredential.user;
        Seterror('')
        console.log(logeduser);
        toast(" Ragistration in success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        Seterror(errorMessage)
      })


    console.log(email, password, user, url);
    e.target.reset();

  }

  return (
    <div>
      <div className='  my-5 mx-auto' style={{ maxWidth: '80%' }}>



        <Card className='mx-auto my-5' >
          <div className='pt-4'>
            <h1 className='text-center text-dark fw-bold text-uppercase'>SIgn up NOw</h1>

          </div>
          <form onSubmit={handleSignup} className='m-5'>


            <div className="mb-3 w-100">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name='user' placeholder='Enter your username' id="exampleInputEmail1" />
            </div>
            <div className="mb-3 w-100">
              <label className="form-label">Email address</label>
              <input type="email" required className="form-control" name='email' placeholder='Enter your email' id="exampleInputEmail1" />
            </div>
            <div className="mb-3 w-100">
              <label className="form-label">Photo url</label>
              <input type="text" className="form-control" placeholder='Enter your photoUrl' name='photo' id="exampleInputEmail1" />
            </div>
            <div className="mb-3 w-100">
              <label className="form-label">Password</label>
              <input type="password" required placeholder='Enter your password' className="form-control" name='password' id="exampleInputPassword1" />
            </div>

            <button type="submit" className="btn btn-dark w-100">Submit</button>
            <p className='py-3'>Already have an account? <Link to='/login' className='text-decoration-none text-danger'>Log  In now</Link></p>
            <p className='py-2 text-danger fw-bold text-uppercase'>{error}</p>
            <ToastContainer />
          </form>
        </Card>






      </div>
    </div>
  );
};

export default Signup;