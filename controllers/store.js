const mongoose = require('mongoose');
const Store = require('../models/store');

exports.getAllStores = (req, res) => {
  Store.find({}, (err, store) => {
    if (err) {
      return res.status(500).json({
        message: 'Store Not Found!'
      });
    }
    console.log('Stores has been requested.');
    return res.json(store);
  });
};
