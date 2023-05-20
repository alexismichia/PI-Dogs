const { Router } = require('express');
const axios = require('axios');


// Importar todos los routers;


// aquí puedes usar los modelos Dog y Temperament para realizar consultas a la base de datos

const { Op } = require('sequelize');
const allDogs = require('../handlers/allDogs');
const newDog= require('../handlers/newDog')
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', allDogs);

const { dogByID } = require('../handlers/dogByID');
const { getDogByID } = require('../controllers/getDogByID');
const { allTemperaments } = require('../handlers/allTemperaments');
const getDogsByName = require('../handlers/dogsByName');

router.get('/dogs/:id', dogByID(getDogByID));
router.get('/dogs/name',getDogsByName)
router.post('/dogs',newDog)
  
router.get('/temperaments', allTemperaments);

module.exports = router;
