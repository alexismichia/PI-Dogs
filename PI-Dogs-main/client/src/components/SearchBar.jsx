import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs, getDogsByBreed } from '../redux/actions/actions';
import Styles from "../Styles/SearchBar.module.css"

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
  setSearchTerm(event.target.value)
  };

  const handleSearch = (event) => {
    event.preventDefault()
    dispatch(getDogsByBreed(searchTerm))

    console.log(searchTerm)
  };
  

  return (
    <div className='search-bar'>
      <input className='input' type="text" value={searchTerm}  onChange={handleInputChange} />
      <button  className='button' onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
