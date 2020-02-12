const express = require('express');
const router = express.Router();

const StoreController = require('../controllers/store');

router.get('', StoreController.getAllStores);

router.post('', StoreController.createStore);

module.exports = router;
