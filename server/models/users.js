const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	hash: String,
	salt: String
});

userSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function(password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
	return this.hash === hash;
}

userSchema.methods.generateJwt = function() {
	let expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign({
		_id: this._id,
		email: this.email,
		first_name: this.first_name,
		last_name: this.last_name,
		exp: parseInt(expiry.getTime() / 1000),
	}, process.env.SHOELACES_USER_SECRET_KEY);
}

var User = mongoose.model('User', userSchema);

module.exports = User;