const express = require('express');
const router = express.Router();

const FurnitureController = require('../controllers/furniture');

router.get('', FurnitureController.getAllFurniture);

router.post('', FurnitureController.createFurniture);

module.exports = router;
