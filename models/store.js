const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: {
      address: String,
      postcode: String
    },
    enum: ['address', 'postcode'],
    required: true
  },
  openingTimes: {
    type: Object,
    required: true
  }
});

module.exports = mongoose.model('store', storeSchema);
