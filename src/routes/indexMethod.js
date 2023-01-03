const express = require('express')
const methodController = require('../controller/methodController')
const router = express.Router()

router.get('/', methodController.show)
router.post('/', methodController.create)

module.exports = router