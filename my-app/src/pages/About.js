import React from 'react'
import { Layout } from '../layout';
import './About.css';

const About = () => (
    <Layout>
        <div className='wrap'>
            <div className='text-container'>
                <h1>Why I decided to make a Cooking website?</h1>
                <div className='text-boxes'>
                    <div className='first-box-container'><p>There are multiple reasons to be a chef for me and the very first one is I just love cooking. I know it is quite common to cook but I just love it and it keeps me happy. One should do what makes them happy and I really like experimenting with new recipes too.</p></div>
                    <div className='second-box-container'><p>Apart from my love for cooking, another most important thing is I am a glutton. Every day, I just think about food and what the next that I can try. Sometimes my parents just don’t allow me to have street food at that time my cooking abilities help me and I really want to learn more, so that I can cook some five-star hotels recipes at home.</p></div>
                    <div className='third-box-container'><p>The third reason behind loving this profession is I love serving others. I like to invite people and cooking something they like. It gives me immense pleasure and my love for this profession increases more and more.</p></div>
                </div>
            </div>
            <img src='https://wallpaper.dog/large/20399393.jpg' alt=''></img>
        </div>
    </Layout>
)

export default About;