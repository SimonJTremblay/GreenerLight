import React from 'react'
import './Charity.css'

const Charity = ({name, url, description, imageURL, onComponentCharityChange}) => {
    return(
        <div 
            className='tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5 flex flex-column'
            onClick={() => onComponentCharityChange(name)}
        >
            <img className="charity-logo" alt='charities' src={imageURL}/>
            <div className="pv3">
                <p>{description}</p>
                <a className="f4 fw6 db purple no-underline underline-hover" href= {url}>
                    {name}
                </a>
            </div>
        </div>
    );
}

export default Charity;