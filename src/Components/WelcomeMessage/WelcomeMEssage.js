import React from 'react'

const WelcomeMessage = ( { name }) =>{
    return(
        <div>
            <div className='white f2'>
                {`Hi ${name}, how will we change the world today?`}
            </div>

           {/* { <div className='white f1'>
                {'#5'}
            </div>} */}
        </div>
    );
}

export default WelcomeMessage;