const { Dog, Temperament } = require('../db');
const { Op } = require('sequelize');
const { Sequelize } = require('sequelize');

const axios= require('axios')
async function getDogsData() {
  try {
    // Primero buscamos los perros en la base de datos
    let dbDogs = await Dog.findAll({
      
      include: {
        model: Temperament,
        
        through: { attributes: [] },
      },
      
    });
    dbDogs= dbDogs.map(dg => {
      return {
        weight: dg.weight,
        height: dg.height,
        id: dg.id,
        name: dg.name,
        life_span: dg.life_span,
        temperament: dg.temperaments.map(temp=>temp.name).join(", "),
        image: dg.image
      };
      
  })

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
        life_span: dg.life_span,
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

