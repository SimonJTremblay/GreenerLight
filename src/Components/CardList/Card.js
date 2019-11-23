import React from 'react'
import './Card.css'
import MetaList from '../MetaList/MetaList'

const Card = ({ title, meta, id }) => {
    //const { title, meta, id } = props;      // destructuring the props
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='categories' src={require(`./images/${title}.jpg`)}/>
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