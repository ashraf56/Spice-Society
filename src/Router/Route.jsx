import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Blog from "../component/Blog";
import DetailChef from "../component/DetailChef";
import Login from "../Authentication page/Login";
import Signup from "../Authentication page/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Errorpage from "../ErrorPage/Errorpage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<Errorpage></Errorpage>,
      children:[
{
    path:'/',
    element:<Home></Home>
},
{
    path:'/blog',
    element:<Blog/>
},
{
  path:'/chef/:id',
  element:<ProtectedRoute>,
    <DetailChef></DetailChef>
  </ProtectedRoute>
  ,
  loader: ({params})=> fetch(`https://b7a10-chef-recipe-hunter-server-side-ashraf56.vercel.app/chef/${params.id}`)
},
{
  path:'/login',
  element:<Login></Login>
},
{
  path:'/signup',
  element:<Signup/>
},


      ]
    },
  ]);

  export default router;