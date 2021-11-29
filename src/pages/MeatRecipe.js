import React from "react";
import Card from "./components/Card";
import "./MeatRecipe.css";

const MeatRecipe = () => {
    return (
        <div className='wrap-recipe'>
            <h3>Meat recipes</h3>
            <Card 
                title='Steak haché with pommes frites and cheats Béarnaise sauce'
                imageUrl='https://img.freepik.com/free-photo/two-grilled-marbled-beef-steaks-striploin_79782-926.jpg?size=626&ext=jpg'
                text='A classic French recipe of bun-less burger & chips, that can be found in every brasserie and bistro. Kids will love it and it is easy to create together at home'
                link=''/>
        </div>
    )
}

export default MeatRecipe;