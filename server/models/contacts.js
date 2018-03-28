const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var contactSchema = new Schema({
	name: String,
  email: String,
  categories: [String]
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;