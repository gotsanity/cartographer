const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('express-jwt');
var auth = jwt({
	secret: process.env.SHOELACES_USER_SECRET_KEY,
	userProperty: 'payload'
});

var ctrlAuth = require('../controllers/authentication');
var ctrlProfile = require('../controllers/profile');

// Post Register
router.post('/register', ctrlAuth.register);

// Post Login
router.post('/login', ctrlAuth.login);

// Get UserID
router.get('/profile', auth, ctrlProfile.profileRead);

module.exports = router;