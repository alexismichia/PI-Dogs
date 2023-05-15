const { Dog, Temperament } = require('../db');
const axios = require('axios');
const getDogByID = async (id) => {
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`);
  const dogData = response.data; 

  const dog = {
    id: dogData.id,
    name: dogData.name,
    life_span: dogData.life_span,
    temperament: dogData.temperament,
    height: dogData.height,
    weight: dogData.weight,
    image: dogData.image,
  };

  return dog;
};

module.exports = { getDogByID };
