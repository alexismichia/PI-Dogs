import React from "react";
import styles from "../Styles/DogList.module.css"

const DogList = ({ id, name, weight, height, image_url, temperament, life_span }) => {
  return (
    <div className={styles.dogCardContainer}>
      <div className={styles.dogCard} key={id}>
        <h2>{name}</h2>
        <p>Height: {height} cm</p>
        <p>Weight: {weight} kg</p>
        <p>Life Span: {life_span} years</p>
        <p>Temperament: {temperament}</p>
        <img src={image_url} alt={name} />
      </div>
    </div>
  );
};

export default DogList;
















