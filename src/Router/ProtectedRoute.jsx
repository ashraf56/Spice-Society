import React, { useContext } from 'react';
import { Authcontext } from '../Authentication page/AuthCenter/AuthCenter';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    let {user,loader}=useContext(Authcontext);
    let location=useLocation();
    if(loader){
        return  <div className='text-center'>
        <div className="spinner-grow  text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div></div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'  state={{from:location}}  replace></Navigate>
};

export default ProtectedRoute;