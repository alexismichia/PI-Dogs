const { Dog, Temperament } = require('../db');

async function createNewDog(req, res, next) {
  const { name, height, weight, life_span, image, temperaments } = req.body;
  try {
    const newDog = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image,
    });

    if (temperaments && temperaments.length > 0) {
      const existingTemperaments = await Temperament.findAll({
        where: {
          id: temperaments,
        },
      });

      // Verificar si se encontraron todos los temperamentos solicitados
      if (existingTemperaments.length !== temperaments.length) {
        throw new Error('One or more temperaments do not exist');
      }

      await newDog.setTemperaments(existingTemperaments);
    }

    res.status(201).json(newDog);
  } catch (error) {
    next(error);
  }
}

module.exports = createNewDog;

