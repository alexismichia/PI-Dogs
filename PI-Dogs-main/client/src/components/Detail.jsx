import React, { useEffect } from "react";
import styles from "../Styles/Detail.module.css";
import { getDogId } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Detail = (props) => {
  const { id } =useParams() // Acceder al ID de la URL
  const dispatch = useDispatch();
  const DogById = useSelector((state) => state.DogById);
 
  useEffect(() => {
    console.log("ID:", id); 
    dispatch(getDogId(id));
  }, [dispatch, id]);

  return (
    <div className={styles.detailContainer}>
      <div className={styles.dogCard} key={DogById.id}>
        <h2>{DogById.name}</h2>
        <p>ID: {DogById.id}</p>
       <p>Height: {DogById.height?.metric} cm</p>
        <p>Weifht: {DogById.weight?.metric} kg</p>
        <p>Life Span: {DogById.life_span}</p>
        <p>Temperament: {DogById.temperament}</p>
        <img src={DogById.image?.url} alt={DogById.name} />
      </div>
    </div>
  );
};

export default Detail;



