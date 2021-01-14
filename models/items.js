const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: Number
});


module.exports = mongoose.model('Items', itemSchema);
