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