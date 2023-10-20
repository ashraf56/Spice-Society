import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from '../assets/close-up-person-s-hand-.avif';
import img2 from '../assets/restaurant-style-spicy-chicken-biryani.avif';
import img3 from '../assets/grilled-chicken-steak-vegetables.avif';
import img4 from '../assets/high.avif';
import img5 from '../assets/penne-pasta-with-tomato-sauce.avif';


const FoodMarquee = () => {
    return (
        <div className='pb-5'>
            <h1 className='fw-bold text-center py-5'>Some Delicious recipe</h1>
            <div className='container'>
               <Marquee speed='150'>
 <div >
     <img src={img1} className=' img-fluid ' />
  <img src={img2} className='img-fluid ' />
  <img src={img3} className='img-fluid ' />
  <img src={img4} className='img-fluid ' />
  <img src={img5} className='img-fluid ' />
 </div>
 

</Marquee> 
            </div>
            
        </div>
    );
};

export default FoodMarquee;