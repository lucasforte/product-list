import React from 'react';

const SearchBar = (props) => {
  return(
    <div>
      <input type="search" name="" id="" placeholder="Search Product" onChange={props.search}/>
    </div>
  );
}

export default SearchBar;