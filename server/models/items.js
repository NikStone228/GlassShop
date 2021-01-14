const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  title: String, 
  image: {
    type: String,
    data: Buffer
  },
  price: Number
});


module.exports = mongoose.model('Items', itemSchema);
