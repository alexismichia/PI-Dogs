const { Op } = require('sequelize');
const { Dog } = require('../db');

async function getDogsByName(req, res, next) {
  const { name } = req.query;
  try {
    const dogs = await Dog.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });
    res.json(dogs);
  } catch (error) {
    next(error);
  }
}

module.exports = getDogsByName;
