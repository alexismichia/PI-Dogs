const { Dog, Temperament } = require('../db');
const axios = require('axios');
const getDogByID = async (id) => {
  if (isNaN(+id)) {
    let filterDb = await Dog.findByPk(id);
    return filterDb;
  }
  
  let {data} = await axios.get(`https://api.thedogapi.com/v1/breeds`);
   data=data.find((breed)=> breed.id=== +id);

   if (!data?.name) throw Error("No breeds found");

   const { height, weight,image, ...rest } = data;
   const modifiedData = {
     ...rest,
     height: height.metric,
     weight: weight.metric,
     image: image.url
    
   };
 
   return modifiedData;
 };

module.exports = { getDogByID };
