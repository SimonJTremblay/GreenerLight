import React from 'react'
import './Charity.css'

const Charity = ({ id, name, url, description, imageURL }) => {
    return(
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className="charity-logo" alt='charities' src={imageURL}/>
            <div>
                <h2>{id}</h2>
                <h2>{name}</h2>
                
            </div>
        </div>
    );
}

export default Charity;