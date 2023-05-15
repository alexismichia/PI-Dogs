const axios = require('axios');
const { Dog } = require('../db');
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

async function getDogsByName(name) {
  try {
    if (!name) return { message: "Missing required data" };
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    console.log(data);
    const dogsFromApi = data.map(dg => {
      const dog = {
        weight: dg.weight.metric,
        height: dg.height.metric,
        id: dg.id,
        name: dg.name,
        bredFor: dg.bred_for,
        breedGroup: dg.breed_group,
        lifeOfYear: dg.life_span,
        temperament: dg.temperament,
        image: dg['reference_image_id']
      };
      return dog;
    });
    const dogsFromDb = await Dog.findAll({
      where: {
        name: {
          [Sequelize.Op.startsWith]: name
        }
      }
    });
    
  
    const dogs = [...dogsFromApi, ...dogsFromDb].filter((dog) => {
      const regex = new RegExp(`^${name.charAt(0).toUpperCase()}`, 'i');
      return regex.test(dog.name[0]);
    });
    
    
    if (dogs.length == 0) return { message: "Dog not found" };
    return dogs.slice(0, 50); // limit the number of results to 50
  } catch (error) {
    return { message: error.message };
  }
}


module.exports = getDogsByName;

