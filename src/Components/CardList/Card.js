import React from 'react'
import './Card.css'

const Card = ({ title, meta, id }) => {
    //const { title, meta, id } = props;      // destructuring the props
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='categories' src={require(`./images/${title}.jpg`)}/>
            <div>
                <h2>{title}</h2>
                <p className='bg-light-blue dib br3 pa2 ma2 bw2 shadow-5'>{meta}</p>
            </div>
        </div>
    );
}

export default Card;