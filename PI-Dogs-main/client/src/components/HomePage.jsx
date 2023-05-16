import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import DogList from "./DogList";
import FilterOptions from "./FilterOptions";
import Pagination from "./Pagination";
import CreateDogForm from "./CreateDogForm";
import styles from  "../Styles/HomePage.module.css";
import { getDogs, getTemperaments } from "../redux/actions/actions";

const HomePage = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getDogs());
  }, [dispatch]);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  
  const handleCloseForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    if (showForm) {
      setFormSubmitted(false);
    }
  }, [showForm]);

  const handleSubmitForm = () => {
    setFormSubmitted(true);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleSort = (sort) => {
    setSort(sort);
  };
  




  return (
    <div>
      <h1 className={styles.title}>Razas de Perros</h1>
      <div className={styles.buttonContainer}>
      <Link to="/form">
        <button className={styles.button}>Agregar nueva raza</button>
      </Link>
        <SearchBar onSearch={handleSearch} />
        <FilterOptions
          temperaments={temperaments}
          onFilter={handleFilter}
          onSort={handleSort}
        />
      </div>
      {showForm && (
        <CreateDogForm
          onClose={handleCloseForm}
          onSubmit={handleSubmitForm}
        />
      )}
      {formSubmitted && (
        <div className={styles.successMessage}>Formulario enviado correctamente.</div>
      )}
       {dogs?.map((dog) => (
      <DogList
          key={dog.id}
          id={dog.id}
          name={dog.name}
          image_url={dog.image_url}
          weight={dog.weight}
          temperament={dog.temperament}
          life_span={dog.life_span}
          
          height={dog.height}
          />
          ))}
      
    

 


      <Pagination />
      <p>7 DIAS HAN PASADO Y NI UN PERRO POR AQUI...</p>
    </div>
  );
};

export default HomePage;
















