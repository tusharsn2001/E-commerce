const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')


router.post('/signup', authController.signup);
router.post('/login', authController.signup);

router.route('/').get(userController.getAllUsers)

module.exports = router