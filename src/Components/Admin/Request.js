import React from 'react';

const Request = ({id, title, state, onRequestDecision}) => {
    return(
        <div className="tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <span className="f3 mr5">{title}</span>
            <button className="f6 grow no-underline br-pill ph3 pv2 ma1 dib white bg-dark-green" onClick={() => onRequestDecision(id,'yes')}>Accept</button>
            <button className="f6 grow no-underline br-pill ph3 pv2 ma1 dib white bg-dark-green" onClick={() => onRequestDecision(id,'no')}>Reject</button>
        </div>
    );
}



export default Request;