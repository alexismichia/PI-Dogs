const createNewDog = require('../controllers/createNewDog');

const newDog = async (req, res) => {
  try {
    
    const { image, name, weight, height, life_span, temperament } = req.body;
    await createNewDog({ image, name, weight, height, life_span, temperament });
    
    return res.status(200).json({ message: "Breed added successfully"});
   
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = newDog;

