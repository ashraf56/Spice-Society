import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/404-error-with-landscape-concept-illustration_114360-7898.avif'

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className='d-flex   m-5'>
      <div className='container mt-5 px-5 mx-auto my-8'>
        <div className='text-center'>
         <img src={img}    />   
        </div>
    

        <div className='text-center'>
          <h2 className='mb-8 fw-bold  '>
            <span >Error</span> {status}
          </h2>
          <p className=' fw-semibold  mb-5'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-5 py-3 fw-semibold rounded text-decoration-none '
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
