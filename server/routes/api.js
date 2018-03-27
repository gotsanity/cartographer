const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/post');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api online');
});

module.exports = router;