const mongoose = require('mongoose');
const Furniture = require('../models/furniture');

exports.getAllFurniture = (req, res) => {
  Furniture.find({}, (err, furniture) => {
    if (err) {
      return res.status(500).json({
        message: 'Furniture Not Found!'
      });
    }
    console.log(`Furniture has been requested.`);
    return res.json(furniture);
  });
};

exports.createFurniture = (req, res) => {
  const furniture = new Furniture({
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
    dimensions: req.body.dimensions,
    location: req.body.location,
    quantity: req.body.quantity
  });
  furniture
    .save()
    .then(createdItem => {
      console.log(`created furniture - ${createdItem}`);
      res.status(201).json({
        message: 'Furniture added Successfully',
        user: {
          ...createdItem,
          id: createdItem._id
        }
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Creating Furniture Failed!'
      });
    });
};
