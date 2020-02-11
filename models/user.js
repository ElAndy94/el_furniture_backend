const mongoose = require('mongoose');
const uniqueVal = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    uniqueVal: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: number,
    required: true
  },
  orders: {
    type: Array,
    required: false
  }
});

userSchema.plugin(uniqueVal);
module.exports = mongoose.model('user', userSchema);