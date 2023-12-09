const express = require('express')
const gpuController = require('../controllers/gpuController')
const router = express.Router();


router.route('/').get(gpuController.getGraphiccards)
router.route('/:id').get(gpuController.getGraphicCard)

module.exports = router