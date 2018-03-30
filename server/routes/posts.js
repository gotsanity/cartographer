const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');

// dev data
const axios = require('axios');

// /api/posts Routes

// Get all Posts
router.get('/', (req, res) => {
  console.log('toast');
  Post.find({}).sort([['updated_on', -1]]).exec(function(err, posts) {
    if (err) throw err;
    console.log(posts);
    res.status(200).json(posts);
  })
});

// Get num recent posts
router.get('/recent/:limit', (req, res) => {
  Post.find({}).sort({'created_on': -1}).limit(parseInt(req.params.limit)).exec(function(err, posts) {
    if (err) throw err;
    console.log(posts);
    res.status(200).json(posts);
  })
});

// Get a single Post
router.get('/single/:id', (req, res) => {
  Post.findById(req.params.id, function(err, post) {
    if (err) throw err;
    res.status(200).json(post);
  });
});

router.get('/single/', (req, res) => {
  res.status(500).json();
});

// Add a new Post
router.post('/add', (req, res) => {
  console.log(req.body);
  var newPost = Post({
    title: req.body.title,
    author: {
      name: req.body.author.name,
      contact: req.body.author.contact,
    },
    spoiler_image: {
      url: req.body.spoiler_image.url,
      alt: req.body.spoiler_image.alt,
      caption: req.body.spoiler_image.caption
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
router.post('/update/:id', (req, res) => {
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
router.post('/delete/:id', (req, res) => {
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