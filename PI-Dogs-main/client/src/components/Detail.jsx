import React from "react";
import styles from "../Styles/Detail.module.css"
import { getDogs, getTemperaments } from "../redux/actions/actions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Detail = ({ id, name, weight, height, image, temperament, lifeOfYear }) => {
   
    const dogs = useSelector((state) => state.dogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTemperaments());
        dispatch(getDogs());
      }, [dispatch]);
  
    return (
    <div className={styles.dogCardContainer}>
      {dogs?.map((dog) => (
      <div className={styles.dogCard} key={dog.id}>
        <h2>{dog.name}</h2>
        <p>ID: {dog.id}</p>
        <p>Height: {dog.height} cm</p>
        <p>Weight: {dog.weight} kg</p>
        <p>Life Span: {dog.lifeOfYear} </p>
        <p>Temperament: {dog.temperament}</p>
        <img src={dog.image} alt={name} />
      </div>
      ))};
    </div>
  );
}

export default Detail;

