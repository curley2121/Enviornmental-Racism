import React from 'react';

const SearchBar = (props) =>{
  return (
    <input type='search'
    className='search'
    palceholder = {'Search Resources'}
    onChange = {props.handleChange}
    />
    )
}

export default SearchBar;