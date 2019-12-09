import React from 'react'
import './Card.css'
import MetaList from '../MetaList/MetaList'
import imageList from './images/imageList';

const Card = ({ title, meta, id }) => {
    
        var image = 'default';
        Object.values(imageList).forEach(element => {
            Object.values(element).forEach(value => {
                if(value.title === title){
                    image = value.title;
                }
            })            
        });
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='categories' src={require(`./images/${image}.jpg`)}/>
            <div>
                <h2>{title}</h2>
                <div className='center'>
                    <MetaList meta={meta} />
                </div>
            </div>
        </div>
    );
}

export default Card;