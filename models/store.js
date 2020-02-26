const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    address: { type: String, required: true },
    postcode: { type: String, required: true }
  },
  openingTimes: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('store', storeSchema);
