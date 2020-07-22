import React from 'react';

const SearchBar = (props) => {
  return(
    <div id="search-bar" className="wrapper-1-1 row center">
      <input type="search" name="" id="" placeholder="Search Product" onChange={props.search}/>
    </div>
  );
}

export default SearchBar;