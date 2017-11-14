//profiles.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profilesSchema = Schema({
  name: String,
  email: String,
}, { strict: 'throw' });


module.exports = mongoose.model('profiles', profilesSchema);