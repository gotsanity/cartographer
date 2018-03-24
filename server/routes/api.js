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

// Get a single Post
router.get('/posts/single/:id', (req, res) => {
	Post.findById(req.params.id, function(err, post) {
		if (err) throw err;
		res.status(200).json(post);
	});
});

router.get('/posts/single/', (req, res) => {
	res.status(500).json();
});

// Add a new Post
router.post('/posts/add', (req, res) => {
	console.log(req.body);
	var newPost = Post({
		title: req.body.title,
		author: {
			name: req.body.author.name,
			contact: req.body.author.contact,
		},
		body: req.body.body,
		tags: req.body.tags
	});

	newPost.save(function(err, post) {
		if (err) throw err;
		res.status(200).json(post);
	});
});

// Update a Post
router.post('/posts/update/:id', (req, res) => {
	Post.findById(req.params.id, function(err, post) {
		console.log(req.body);
		if (err) throw err;

		post.title = req.body.title;
		post.author = {
			name: req.body.author.name,
			contact: req.body.author.contact
		};
		post.body = req.body.body;
		post.tags = req.body.tags;

		post.save(function(err, updatedPost) {
			if (err) throw err;
			res.status(200).json(updatedPost);
		});
	});
});

// Delete a Post
router.post('/posts/delete/:id', (req, res) => {
	Post.findById(req.params.id, function(err, post) {
		if (err) throw err;

		post.remove(function(err) {
			if (err) throw err;

			console.log('Deleted post ' + req.params.id);
			res.status(200).json({ success: true });
		});
	});
});

module.exports = router;