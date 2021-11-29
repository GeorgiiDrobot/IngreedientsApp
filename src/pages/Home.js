import React from 'react'
import { Layout } from '../layout';
import "./Home.css"
import Card from './components/Card'


const Home = () => (
    <Layout>
        <div>
            <div className="firstText">
                <h1>What do you prefer?</h1>
            </div>
            
            
            <div className="bigCards">
                    <Card 
                title='Meat lovers!'
                imageUrl='https://www.firestock.ru/wp-content/uploads/2015/08/Dollarphotoclub_52298958.jpg'
                text='Cooking thermometers or temperature probes can be an easy way to check if food is cooked properly. The food should reach a temperature of 70°C for more than two minutes, or 75°C for 30 seconds, in the middle or thickest part. Some types of food change colour when they’re cooked.'
                link='/meat'/>
                <Card 
                title='Fish lovers!'
                imageUrl='https://mocah.org/uploads/posts/862664-Fish-Food-Lemons-White-background-Plate.jpg'
                text='Hope it is not data fishing! You lay it on a baking sheet and season it with a little lemon, salt and pepper, and fresh herbs. Sounds delicious. You turn the oven on to 400°F, how long does it take to cook that fish through? 45 minutes? 30 minutes? No. Probably 10-12 minutes depending on the size of the fillets. Big fillets may take 15 minutes.'
                link='/fish'/>
                <Card 
                title='Vegan?'
                imageUrl='https://www.vippng.com/png/detail/35-350115_png-for-images-pluspng-real-food-png.png'
                text='We have best solutions with vegetarian recipes '
                link='/vegan'/>
            </div>
        </div>
    </Layout>
)

export default Home;