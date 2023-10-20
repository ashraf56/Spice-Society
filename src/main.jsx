import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Route.jsx';
import 'react-toastify/dist/ReactToastify.css';
import AuthCenter from './Authentication page/AuthCenter/AuthCenter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthCenter>
    <RouterProvider router={router} />
  </AuthCenter>,
)
