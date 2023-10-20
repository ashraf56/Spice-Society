import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';


const Allrecepie = ({recipe}) => {
    let {name ,ingredients,rating,cooking_method}=recipe;
    const [isFavorite, setIsFavorite] = useState(false);

let show=()=>{
    toast(" This recipe has been added to your favourites",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })

    // Set the isFavorite state to true
    setIsFavorite(true);
}

    return (
        <div>
             <div className="col  h-100">
    <div className="card h-100 rounded-5">
    
      <div className="card-body m-2 ">
      
        <h3 className="card-title text-danger fw-bold text-uppercase">{name}</h3>
        <p>Ratings  <span className='text-warning'> <FaStar/></span> {rating}</p>
      <div>
        <h5 className=' fw-bold text-uppercase'>Ingredients</h5>

        <ul className="list-group list-group-flush">
  <li className="list-group-item">{ingredients[0]}</li>
  <li className="list-group-item">{ingredients[1]}</li>
  <li className="list-group-item">{ingredients[2]}</li>
  <li className="list-group-item">{ingredients[3]}</li>
  <li className="list-group-item">{ingredients[4]} </li>
</ul>
      </div>

      <div className='pt-3 '>
        <h5 className='pb-2  fw-bold text-uppercase'>Cooking Method</h5>
        <p className='fw-bold'> 
        {cooking_method}
      </p>
      </div>
      
        <button className='btn btn-outline-danger mt-2 rounded-4' onClick={show} disabled={isFavorite}>Favorite </button>
        <ToastContainer />

      
      </div>
    </div>
  </div>
        </div>
    );
};

export default Allrecepie;