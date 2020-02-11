const mongoose = require('mongoose');
const User = require('../models/user');

exports.getAllUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).json({
        message: 'Users Not Found!'
      });
    }
    console.log('Users has been requested.');
    return res.json(users);
  });
};

exports.createUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    orders: req.body.order
  });
  user
    .save()
    .then(createdUser => {
      console.log(`created user - ${createdUser}`);
      res.status(201).json({
        message: 'User added Successfully',
        user: {
          ...createdUser,
          id: createdUser._id
        }
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Creating User Failed!'
      });
    });
};
