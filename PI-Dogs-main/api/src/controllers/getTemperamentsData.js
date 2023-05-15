function getTemperamentsData(data) {
  let temperaments = [];
  data.forEach((breed) => {
    const breedTemperaments = breed.temperament?.split(',').map((t) => t.trim()) || [];
    temperaments = [...temperaments, ...breedTemperaments];
  });

  temperaments = Array.from(new Set(temperaments));

  const temperamentsData = temperaments.map((t) => ({ name: t }));
  return temperamentsData;
}

module.exports = { getTemperamentsData };
