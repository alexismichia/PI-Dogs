import React from "react";
import styles from "../Styles/DogList.module.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const DogList = ({ id, name, weight, height, image, temperament, lifeOfYear }) => {
  return (
    <div className={styles.dogCardContainer}>
      <Link to={`/detail/${id}`}>
      <div className={styles.dogCard} key={id}>
        <h2>{name}</h2>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} kg</p>
        <p>Life Span: {lifeOfYear} </p>
        <p>Temperament: {temperament}</p>
        <img src={image} alt={name} />
      </div>
      </Link>
    </div>
  );
};

export default DogList;
















