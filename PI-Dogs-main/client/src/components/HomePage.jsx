import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import DogList from "./DogList";
import FilterOptions from "./FilterOptions";
import Pagination from "./Pagination";
import CreateDogForm from "./CreateDogForm";
import styles from "../Styles/HomePage.module.css";
import { getDogs, getTemperaments } from "../redux/actions/actions";
import Detail from "./Detail";

const HomePage = () => {
  const temperaments = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.dogs);
  const filtered = useSelector((state)=>state.filter)
  const dispatch = useDispatch();
const Filteredbreeds= useSelector((state)=>state.DogsByBreed)
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  
  let copydog= [...dogs]
  if(filtered.length) copydog=[...filtered]
  if(Filteredbreeds.length) copydog=[...Filteredbreeds]
  const currentDogs = copydog?.slice(indexOfFirstDog, indexOfLastDog);

  
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

 

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const handleSort = (sort) => {
    setSort(sort);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 className={styles.title}>Razas de Perros</h1>
      <div className={styles.buttonContainer}>
        <Link to="/form">
          <button className={styles.button}>Agregar nueva raza</button>
        </Link>
        <SearchBar  />
        <FilterOptions
          
          onFilter={handleFilter}
          onSort={handleSort}
        />
      </div>
      {showForm && (
        <CreateDogForm onClose={handleCloseForm} onSubmit={handleSubmitForm} />
      )}
      {formSubmitted && (
        <div className={styles.successMessage}>
          Formulario enviado correctamente.
        </div>
      )}
      <div className={styles.dogListContainer}>
        {currentDogs?.map((dog) => (
          <DogList className={styles.dogListContainer}
            key={dog.id}
            id={dog.id}
            name={dog.name}
            image={dog.image}
            weight={dog.weight}
            temperament={dog.temperament}
            lifeOfYear={dog.lifeOfYear}
            height={dog.height}
            />
            ))}
          </div>
         
          <Pagination
            itemsPerPage={dogsPerPage}
            totalItems={dogs?.length}
            initialPage={1}
            onPageChange={handlePageChange}
            />
          <p>7 DIAS HAN PASADO Y NI UN PERRO POR AQUI...</p>
          </div>
        );
        };

export default HomePage;

















