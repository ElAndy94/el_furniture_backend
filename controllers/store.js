// const mongoose = require('mongoose');
const Store = require('../models/store');

exports.getAllStores = (req, res) => {
  Store.find({}, (err, stores) => {
    if (err) {
      return res.status(500).json({
        message: 'Stores Not Found!'
      });
    }
    console.log('Stores has been requested.');
    return res.json(stores);
  });
};

exports.createStore = (req, res) => {
  console.log(req.body);
  const store = new Store({
    name: req.body.name,
    location: req.body.location,
    openingTimes: req.body.openingTimes
  });
  store
    .save()
    .then(createdStore => {
      res.status(201).json({
        message: 'Store added Successfully',
        store: {
          ...createdStore,
          id: createdStore._id
        }
      });
    })
    .catch(error => {
      // console.log(error);
      res.status(500).json({
        message: 'Creating Store Failed!'
      });
    });
};
