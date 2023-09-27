const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const homeController = require('../controllers/homeController');
const registroController = require('../controllers/registroController');

router.get('/login', loginController.loginUser);
router.get('/cadastro', loginController.cadastroUser);
router.get('/', homeController.homeUser);
router.get('/registro', registroController.registroUser);


module.exports = router;
