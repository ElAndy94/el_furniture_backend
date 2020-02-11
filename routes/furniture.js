const express = require('express');
const router = express.Router();

const FurnitureController = require('../controllers/furniture');

router.get('', FurnitureController.getAllFurniture);

module.exports = router;