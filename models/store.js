const mongoose = require('mongoose');
// const uniqueVal = require('mongoose-unique-validator');

const storeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
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

  // furnitureSchema.plugin(uniqueVal);
  module.exports = mongoose.model('store', storeSchema);