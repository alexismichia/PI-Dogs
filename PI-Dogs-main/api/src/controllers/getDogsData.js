const { Dog } = require('../db');
const axios= require('axios')
async function getDogsData() {
  try {
    // Primero buscamos los perros en la base de datos
    const dbDogs = await Dog.findAll({ raw: true });

    // Luego obtenemos los perros de la API
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds`);
    if (!data) return { message: "Dogs not found" };
    const apiDogs = data.map(dg => {
      const dog = {
        weight: dg.weight.metric,
        height: dg.height.metric,
        id: dg.id,
        name: dg.name,
        bredFor: dg.bred_for,
        breedGroup: dg.breed_group,
        lifeOfYear: dg.life_span,
        temperament: dg.temperament,
        origin: dg.origin,
        image: dg.image.url
      };
      return dog;
    });

    // Combinamos los perros de la DB y de la API y los devolvemos
    const dogs = [...dbDogs, ...apiDogs];
    return dogs;
  } catch (error) {
    return { message: error.message };
  }
}


module.exports = getDogsData;

