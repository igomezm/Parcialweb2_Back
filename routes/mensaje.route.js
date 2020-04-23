var express = require('express');
var router = express.Router();
const userController = require ('../controllers/mensaje.controller');


router.post ('/', mensajeController.createmensaje);