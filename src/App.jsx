import { Outlet } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"


function App() {

  return (
    < div className="container">
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App
