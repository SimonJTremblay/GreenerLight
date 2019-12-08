import React from 'react';

const AmountSelector = ({ onAmountChange }) => {
    return(

        <div className="flex justify-around pa3">
            <p onClick={() => onAmountChange(10)} className="tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5">$10</p>           
            <p onClick={() => onAmountChange(20)} className="tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5">$20</p>           
            <p onClick={() => onAmountChange(50)} className="tc bg-light-blue dib br3 pa3 ma3 grow bw2 shadow-5">$50</p> 
            <input 
                onChange={event => onAmountChange(event.target.value)}
                name="customDonation"
                type="number"
                placeholder="Enter a number."
                min="0"
                className="ma3"
            />          
        </div>
    );
}

export default AmountSelector;