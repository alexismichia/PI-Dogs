const createNewDog = require('../controllers/createNewDog');

const newDog = async (req, res, next) => {
  try {
    await createNewDog(req, res, next);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = newDog;

