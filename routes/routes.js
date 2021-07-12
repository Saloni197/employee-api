const express = require('express')

const router = express.Router()
const controller = require('../controller/controller.js');

router.post('/api/emp', controller.create);
router.get('/api/findall', controller.findAll);
router.patch('/api/update/:id', controller.update);
router.delete('/api/delete/:id', controller.delete);

module.exports = router