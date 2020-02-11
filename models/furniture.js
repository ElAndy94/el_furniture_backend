const mongoose = require('mongoose');
// const uniqueVal = require('mongoose-unique-validator');

const furnitureSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  dimensions: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

// furnitureSchema.plugin(uniqueVal);

module.exports = mongoose.model('furniture', furnitureSchema);
