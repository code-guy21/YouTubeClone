import React,{ Component } from 'react';

const SearchBar = ({searchChange}) => {
    
    return (
        <div className="search-bar">
            <input onChange={(event) => searchChange(event.target.value)}/>
        </div>
    );
    
}

export default SearchBar;