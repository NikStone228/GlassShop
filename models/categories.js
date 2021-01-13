const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    data: Buffer,
    contentType: String
  },

});


module.exports = mongoose.model('Categories', categorySchema);
// ftp сервир для хранения фотографий
