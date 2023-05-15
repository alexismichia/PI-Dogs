const axios = require('axios');

const filterApiData = async () => {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const apiData = response.data.map((breed) => ({
      id: breed.id,
      name: breed.name,
      temperament: breed.temperament,
      height: breed.height.metric,
      weight: breed.weight.metric,
      life_span: breed.life_span,
      image: breed.image.url,
    }));
    return apiData;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { filterApiData };
