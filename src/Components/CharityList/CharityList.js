import React from 'react'
import Charity from './Charity'

const CharityList = ({ charities }) => {
    return(
            <div>
                {
                    // charities.map((user, i) => {     // Dans un map, le 2e element en parametre est l'index
                    //     return (
                    //         <Charity 
                    //             key={i}
                    //             id={charities[i].id}
                    //             title={charities[i].name}
                    //             url={charities[i].url}
                    //             description={charities[i].description}
                    //             imageURL={charities[i].imageURL}
                    //         />
                    //     )
                    // })
                    charities.map(({id, ...otherSectionProps }) => (
                        <Charity key={id} {...otherSectionProps} />
                    ))
                }
            </div>
    );
}

export default CharityList;