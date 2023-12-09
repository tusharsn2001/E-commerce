const express = require('express')
const cpuController = require('../controllers/cpuController')
const router = express.Router();


router.route('/').get(cpuController.getProcessors)
router.route('/:id').get(cpuController.getProcessor)

module.exports = router