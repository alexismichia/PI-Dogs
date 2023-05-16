import React from "react";
import styles from "../Styles/FilterOptions.module.css"
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTemperaments } from "../redux/actions/actions";
import { filterByTemp } from "../redux/actions/actions";
const FilterOptions = ({ onFilter, onSort }) => {
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);
  
  
  const handleFilterByTemp = (temperaments) => {
    dispatch(filterByTemp(temperaments));
  };

  const handleOriginChange = (e) => {
    onFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };
console.log(temperaments)
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filter}>
        <label htmlFor="temperament">Filtrar por Temperamento:</label>
        <select id="temperament" onChange={handleFilterByTemp}>
          <option value="">Todos los Temperamentos</option>
          {temperaments.map((temperament) => {
            return(<option key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          )})}
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor="origin">Filtrar por Origen:</label>
        <select id="origin" onChange={handleOriginChange}>
          <option value="">Todos los Orígenes</option>
          <option value="API">API</option>
          <option value="BD">Base de Datos</option>
        </select>
      </div>
      <div className={styles.filter}>
        <label htmlFor="sort">Ordenar por:</label>
        <select id="sort" onChange={handleSortChange}>
          <option value="">Sin Orden</option>
          <option value="name-asc">Nombre (A-Z)</option>
          <option value="name-desc">Nombre (Z-A)</option>
          <option value="weight-asc">Peso (Ascendente)</option>
          <option value="weight-desc">Peso (Descendente)</option>
        </select>
      </div>
    </div>
  );
};

export default FilterOptions;







// Código terminado!







