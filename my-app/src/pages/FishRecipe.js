import React from "react";
import Card from "./components/Card";
import './FishRecipe.css'

const FishRecipe = () => {
    return (
        <div className='wrap-recipe'>
            
            <Card 
                title='5-Minute Easy Fish Tacos'
                imageUrl='https://i.pinimg.com/originals/f4/c2/f1/f4c2f183c4777997379d06be15346f2e.jpg'
                text='If you are busy, tired, or if you just don’t want to cook but are craving a delicious dinner that kind of cooks itself, then these 5-minute easy fish tacos are ideal for you. They’re fresh, tasty, easy to make, and are ready in no time!'
                />
                <Card 
                title='Adobo Shrimp Bowls With Cilantro Lime Dressing'
                imageUrl='https://ic-cdn.flipboard.com/apartmenttherapy.info/f4910fc6745fd8a0ece7f28c59135a48260f9fba/_medium.jpeg'
                text='These Adobo Shrimp Bowls are loaded with flavorful and juicy shrimp, rice, black beans, tomatoes, avocados, and corn, then drizzled with a fresh cilantro lime dressing. '
                />
                <Card 
                title='Garlic, Lemon & Tomatoes Shrimp Fettuccine Recipe'
                imageUrl='https://www.spotebi.com/wp-content/uploads/2020/12/garlic-lemon-tomatoes-shrimp-fettuccine-recipe-spotebi.jpg'
                text='Since the quality of the food we eat plays one of the most significant roles in hormonal balance, it’s time you feed your body and soul with this buttery, garlicky, and oh so creamy shrimp fettuccine. One serving size provides you with enough saturated fat and cholesterol to get you through the day, plus the homemade tomato and garlic butter is pretty damn delicious!'
                />
                <Card 
                title='Wild Salmon & Vegetables Pie'
                imageUrl='https://www.spotebi.com/wp-content/uploads/2020/12/wild-salmon-vegetables-pie-recipe-spotebi.jpg'
                text='This Wild Salmon & Vegetables Pie is an easy yet filling way to add this healthy fish into your diet. You can make this pie with your favorite vegetables or adapt the recipe to whatever vegetables are in season. And if you don’t like salmon, you can replace it with other healthy fish species, such as tuna, cod, rainbow trout, Pacific halibut, or mackerel.'
                />
        </div>
    )
}

export default FishRecipe;