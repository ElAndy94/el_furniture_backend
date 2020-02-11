const mongoose = require('mongoose');
const User = require('../models/user');

exports.getAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      return res.status(500).json({
        message: 'Users Not Found!'
      });
    }
    console.log('Users has been requested.');
    return res.json(user);
  });
};
