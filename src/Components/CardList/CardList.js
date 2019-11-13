import React from 'react'
import Card from './Card'

const CardList = ({ categories }) => {
   return(
        <div>
            {
                categories.map((user, i) => {     // Dans un map, le 2e element en parametre est l'index
                    return (
                        <Card 
                            key={i}
                            id={categories[i].id}
                            title={categories[i].title}
                            meta={categories[i].meta}
                        />
                    )
                })
            }
        </div>
   );
}

export default CardList;