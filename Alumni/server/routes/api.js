const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();

router.post('/registration', userController.userRegistration);
router.post('/login', userController.userLogin);
router.post('/about', userController.about)

module.exports = router;