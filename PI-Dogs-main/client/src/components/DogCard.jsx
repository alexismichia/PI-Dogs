import React from "react";
import { Link } from "react-router-dom";
import styles from  "../Styles/DogCard.module.css"

export default function DogCard({ name, image, temperament, id }) {
  return (
    <div className={styles.card}>
      <Link to={`/dogs/${id}`}>
        <div className={styles.image_container}>
          <img className={styles.image} src={image} alt={`Imagen de ${name}`} />
        </div>
        <div className={styles.info_container}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.temperament}>{temperament}</p>
        </div>
      </Link>
    </div>
  );
}

