const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    data: Buffer
  }

});


module.exports = mongoose.model('Categories', categorySchema);
