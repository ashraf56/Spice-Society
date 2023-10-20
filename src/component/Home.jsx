import React from 'react';
import Banner from './Banner';
import About from './About';
import Chefs from './Chefs';
import FoodMarquee from './FoodMarquee';

const Home = () => {
    return (
        <div className='justify-content-center'>
           <Banner/>
           <About/>
           <Chefs/>
           <FoodMarquee/>
        </div>
    );
};

export default Home;