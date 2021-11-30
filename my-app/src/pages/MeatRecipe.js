import React from "react";
import Card from "./components/Card";
import "./MeatRecipe.css";

const MeatRecipe = () => {
    return (
        <div className='wrap-recipe'>
            
            <Card 
                title='Steak haché with pommes frites and cheats Béarnaise sauce'
                imageUrl='https://img.freepik.com/free-photo/two-grilled-marbled-beef-steaks-striploin_79782-926.jpg?size=626&ext=jpg'
                text='A classic French recipe of bun-less burger & chips, that can be found in every brasserie and bistro. Kids will love it and it is easy to create together at home'
                />
                <Card 
                title='28 Bone-In Chicken Thigh Recipes'
                imageUrl='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F01%2F28%2F7560738-slow-cooker-filipino-chicken-adobo-photo-by-Chef-Mo-2000.jpg&q=85'
                text='When cooked, this marrow seeps into the meat, resulting in a more robust chicken flavor. Plus, bone-in chicken thighs tend to be cheaper than their boneless counterparts. In sum, you really can not go wrong with bone-in chicken thighs, whether you choose to roast them, pan-fry them, or even air fry them. Here are 28 bone-in chicken thigh recipes to get you started. '
                />
                <Card 
                title='Coconut Chicken Curry'
                imageUrl='https://recipesavant.blob.core.windows.net/food/Curry-Chicken-Thighs-1-252305_facebook.jpg'
                text='This coconut chicken curry is a delicious meal prep idea. It’s high in protein, low in carbs, and is perfect for warming you up on the cold winter days. Try it or try one of the 12 non-boring recipes below and start meal prepping today!'
                />
                <Card 
                title='Caramelized Baked Barbecue Chicken Drumsticks'
                imageUrl='https://healthyfitnessmeals.com/wp-content/uploads/2020/06/instagram-In-Stream_Square___Baked-BBQ-chicken-drums-6.jpg'
                text='Barbecue Chicken drumsticks are a simple recipe to prepare that your family will love. They’re perfect for your cookouts and backyard parties, and these Caramelized Baked Barbecue Chicken Drumsticks are easy, flavorful, and an instant crowd-pleaser you’ll come back to all Spring and Summer long!'
                />
                <Card 
                title='Mini Sloppy Joe Pies'
                imageUrl='https://i.pinimg.com/originals/a0/5d/b7/a05db70332025df8285f50375c1ee658.jpg'
                text='These Mini Sloppy Joe Pies are sweet, zesty, tangy, savory, and a family favorite. With the perfect texture and the right consistency, they’re a crowd-pleaser and so simple and easy to make.'
                />
        </div>
    )
}

export default MeatRecipe;