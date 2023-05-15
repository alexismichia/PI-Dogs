const { Dog, Temperament } = require('../db');

async function createNewDog(req, res, next) {
  const { name, height, weight, life_span, image, temperament } = req.body;
  try {
    const newDog = await Dog.create({
      name,
      height,
      weight,
      life_span,
      image,
    });

    // Busca el objeto Temperament correspondiente al nombre enviado en el body
    const existingTemperament = await Temperament.findOne({
      where: {
        name: temperament,
      },
    });

    // Si existe el objeto Temperament, lo asocia con el nuevo perro
    if (existingTemperament) {
      await newDog.addTemperament(existingTemperament);
    }

    res.status(201).json(newDog);
  } catch (error) {
    next(error);
  }
}


module.exports = createNewDog;