const dogByID = (getDogByID) => async (req, res) => {
  const { id } = req.params;
  try {
    const dog = await getDogByID(id);
    res.json(dog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { dogByID };

