const axios = require('axios');
const { Temperament } = require('../db');
const { getTemperamentsData } = require('../controllers/getTemperamentsData');

async function allTemperaments(req, res, next) {
  try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const data = response.data;

    const temperaments = getTemperamentsData(data);

    await Temperament.bulkCreate(temperaments, { ignoreDuplicates: true });
    const allTemperaments = await Temperament.findAll();
    res.json(allTemperaments);
  } catch (error) {
    next(error);
  }
}

module.exports = { allTemperaments };

