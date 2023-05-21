const { Dog, Temperament } = require('../db');

const createNewDog = async ({
  image,
  name,
  weight,
  height,
  life_span,
  temperament,
}) => {
  //temp sea un array
  const perro=temperament
  console.log(perro)
  const newDog = await Dog.create({
    image,
    name,
    weight,
    height,
    life_span,
  });
 

  const newTemperament = [...new Set(temperament)];

  newTemperament.forEach(async (temper) => {
    const findTemper = await Temperament.findOne({
      where: { name: temper },
    });

    newDog.addTemperament(findTemper);
    
  });

    
  } 

module.exports = createNewDog;
