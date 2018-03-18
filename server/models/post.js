const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var postSchema = new Schema({
	title: String,
	email: String,
	author: String,
	created_on: Date,
	updated_on: Date,
	body: String,
	tags: [String]
});

postSchema.pre('save', function(next) {
	// Update date with new date.
	var currentDate = new Date();
	this.updated_on = currentDate;

	if (!this.created_on) {
		this.created_on = currentDate;
	}

	next();
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;