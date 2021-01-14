const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

});


module.exports = mongoose.model('Categories', categorySchema);
// ftp сервир для хранения фотографий
