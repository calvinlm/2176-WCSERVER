const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let customerSchema = new Schema({
  name: {
    type: String
  },
  contact: {
    type: String
  },
  num: {
    type: String
  },
  time: {
    type: String
  }
}, 
{
  collection: 'customer'
})
module.exports = mongoose.model('Customer', customerSchema)
