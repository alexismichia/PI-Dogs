import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,getTemperaments } from "../redux/actions/actions";

const DogList = ({ id, name, weight, height, image_url, temperament, life_span, breed_group }) => {
  

 

  return (
    <div>
      
        <div key={id}>
          <h2>{name}</h2>
          <p>Height: {height} cm</p>
          <p>Weight: {weight} kg</p>
          <p>Life Span: {life_span} years</p>
          <p>Breed Group: {breed_group}</p>
          <p>Temperament: {temperament}</p>
          <img src={image_url} alt={name} />
        </div>
  
    </div>
  );
};

export default DogList;















