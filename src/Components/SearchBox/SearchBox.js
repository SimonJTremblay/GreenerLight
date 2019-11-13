import React from 'react'

const SearchBox = () =>{
    return(
        <div className="pa2">
            <input
                className= "pa3 ba b--green bg-lightest-green"
                type='search'
                placeholder="Search Field of Interest"
            />
        </div>
    );
}

export default SearchBox;