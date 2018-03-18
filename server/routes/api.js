const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');

// dev data
const axios = require('axios');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api online');
});

// Post Routes

// Get all Posts
router.get('/posts', (req, res) => {
	Post.find({}, function(err, posts) {
		if (err) throw err;
		console.log(posts);
		res.status(200).json(posts);
	})
});

// Add a new Post
router.post('/posts/add', (req, res) => {
	var newPost = Post({
		title: req.body.title,
		email: req.body.email,
		author: req.body.author,
		body: req.body.body,
		tags: req.body.tags
	});

	newPost.save(function(err) {
		if (err) throw err;

		console.log('Post Added');
		res.status(200).send();
	});
});

// Get a single Post
router.get('/posts/single/:id', (req, res) => {
	res.status(501).send('Not Implemented Yet');
});

// Update a Post
router.post('/posts/update/:id', (req, res) => {
	res.status(501).send('Not Implemented Yet');
});

// Delete a Post
router.post('/posts/delete/:id', (req, res) => {
	res.status(501).send('Not Implemented Yet');
});

module.exports = router;