import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs, getDogsByBreed } from '../redux/actions/actions';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
  setSearchTerm(event.target.value)
  };

  const handleSearch = (name) => {
    dispatch(getDogsByBreed(name))
    
  };
  

  return (
    <div>
      <input type="text" value={searchTerm}  onChange={handleInputChange} />
      <button onClick={()=>handleSearch(searchTerm)}>Buscar</button>
    </div>
  );
};

export default SearchBar;
