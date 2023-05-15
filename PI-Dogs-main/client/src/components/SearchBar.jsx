import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../redux/actions/actions';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const url = `/dogs${searchTerm ? `?name=${searchTerm}` : ''}`;
    dispatch(getDogs(url));
  };
  

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
