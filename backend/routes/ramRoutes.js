const express = require('express')
const ramController = require('../controllers/ramController')
const router = express.Router();


router.route('/').get(ramController.getRams)
router.route('/:id').get(ramController.getRam)

module.exports = router