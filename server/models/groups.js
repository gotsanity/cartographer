const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var groupSchema = new Schema({
	role: String,
	permissions: String[],
});

var Group = mongoose.model('Group', groupSchema);

module.exports = Group;