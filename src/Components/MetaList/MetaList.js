import React from 'react'
import Meta from './Meta'

const MetaList = ({ meta }) => {
   return(
        <div className='center'>
            {
                meta.map((user, i) => {     // Dans un map, le 2e element en parametre est l'index
                    return (
                        <Meta 
                            key={i}                            
                            title={meta[i].title}
                        />
                    )
                })
            }
        </div>
   );
}

export default MetaList;