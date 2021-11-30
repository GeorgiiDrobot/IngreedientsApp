import React from "react";
import "./Card.css";

function Card({title, imageUrl, text, link}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <a href={link}>
                    <img src={imageUrl} alt='' ></img></a>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-text-container'>
                    <p>{text}</p>
                </div> 
            </div>
            
            <div className='btn'>
                <button>Click on a picture to see more</button>
            </div>
        </div>
    )
}

export default Card;