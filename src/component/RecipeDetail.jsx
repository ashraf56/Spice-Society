import React from 'react';
import { Link } from 'react-router-dom';
import Allrecepie from './Allrecepie';

const RecipeDetail = ({Chef}) => {
    let {id ,likes,chef_picture,description,chef_name,years_of_experience,recipes,number_of_recipes}=Chef;
    return (
        <div className='container my-4'>
            <h1 className='py-4'>See all recipes of <span className='text-danger'>{chef_name}</span> </h1>

            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    recipes.map(recipe => <Allrecepie 
                    recipe={recipe}
                    >

                    </Allrecepie> )
                }
            </div>

        </div>
    );
};

export default RecipeDetail;