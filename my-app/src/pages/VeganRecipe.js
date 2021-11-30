import React from "react";
import Card from "./components/Card";
import './VeganRecipe.css'

const VeganRecipe = () => {
    return (
        <div className='page-wrap'>
            <h2>We happy to introduce our vegan foodbar!</h2>
            <div className='wrap-recipe'>
                <Card 
                title='Moroccan White Bean & Rice Flour Bites'
                imageUrl='https://www.spotebi.com/wp-content/uploads/2021/06/moroccan-white-bean-rice-flour-bites-recipe-spotebi.jpg'
                text='These Moroccan White Bean & Rice Flour Bites are budget, gluten-free, vegetarian, and the best part is that they’re easy to make and portable. Just mix everything in a blender and bake in the oven for some tasty breakfast or lunch on the go.'
                />
                <Card 
                title='Simple Corn Soup With Fresh Herbs'
                imageUrl='https://www.spotebi.com/wp-content/uploads/2020/09/simple-corn-soup-fresh-herbs-recipe-spotebi.jpg'
                text='Corn on the cob season is here, and this Simple Corn Soup with Fresh Herbs is the perfect summer soup! This recipe features the season’s freshest corn, is ready in just 15 minutes, and can be served hot or cold.'
                />
                    
            </div>
        </div>
    )
}

export default VeganRecipe;