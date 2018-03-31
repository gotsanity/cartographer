const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('express-jwt');
const simpleJwt = require('jwt-simple');

var auth = jwt({
	secret: process.env.SHOELACES_USER_SECRET_KEY,
	userProperty: 'payload'
});

  var payload = {
    key: process.env.SHOELACES_API_KEY
  };
  var secret = process.env.SHOELACES_API_SECRET;

  var token = simpleJwt.encode(payload, secret);
  console.log(token);

var ctrlAuth = require('../controllers/authentication');
var ctrlProfile = require('../controllers/profile');

// Post Register
router.post('/register', ctrlAuth.register);

// Post Login
router.post('/login', ctrlAuth.login);

// Get UserID
router.get('/profile', auth, ctrlProfile.profileRead);

// Update User
router.post('/profile', auth, ctrlProfile.profileUpdate);

router.post('/apikey', auth, function(req, res) {
  var payload = {
    key: process.env.SHOELACES_API_KEY
  };
  var secret = process.env.SHOELACES_API_SECRET;

  var token = simpleJwt.encode(payload, secret);
  res.status(200).json({"token": token});
});

module.exports = router;