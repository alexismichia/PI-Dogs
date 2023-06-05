const { Dog, Temperament } = require('../db');

const createNewDog = async ({
  image,
  name,
  weight,
  height,
  life_span,
  temperament,
}) => {
  
  
  const newDog = await Dog.create({
    image,
    name,
    weight,
    height,
    life_span,
  });

  console.log('New Dog:', newDog.toJSON());
 newDog.addTemperaments(temperament)
 return(newDog)



  

   


  
};

module.exports = createNewDog;



