const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.post('/registration', userController.userRegistration);

module.exports = router;