const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  openingTimes: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('store', storeSchema);
