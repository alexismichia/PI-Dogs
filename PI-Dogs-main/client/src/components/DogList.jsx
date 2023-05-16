import React, { useEffect } from "react";

const DogList = ({ id, name, weight, height, image_url, temperament, life_span }) => {
  

 
  return (
    <div>
      
        <div key={id}>
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















