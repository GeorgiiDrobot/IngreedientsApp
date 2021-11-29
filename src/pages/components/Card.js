import React from "react";
import "./Card.css";

function Card({title, imageUrl, text, link}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} alt=''></img>
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
                <button><a href={link}>View more</a></button>
            </div>
        </div>
    )
}

export default Card;