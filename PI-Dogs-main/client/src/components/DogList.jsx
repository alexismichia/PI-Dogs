import React from "react";
import styles from "../Styles/DogList.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const DogList = ({ id, name, weight, height, image, temperament, life_span }) => {
  return (
    <div className={styles.dogCardContainer}>
      <Link to={`/detail/${id}`} className={styles.linkNoUnderline}>
      <div className={styles.dogCard} key={id}>
        <h2>{name}</h2>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} kg</p>
        <p>Life Span: {life_span} </p>
        <p>Temperament: {temperament}</p>
        <img src={image} alt={name} />
      </div>
      </Link>
    </div>
  );
};

export default DogList;
















