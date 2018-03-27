// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const axios = require('axios');
const passport = require('passport');

// Mongo Connection
mongoose.connect('mongodb://localhost/ocmean'); // TODO: add env variable for config
const Post = require('./server/models/post');

// Passport Configs
const User = require('./server/models/users');
const passportConfig = require('./server/config/passport');

// Get our API routes
const api = require('./server/routes/api');
const posts = require('./server/routes/posts');
const auth = require('./server/routes/auth');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'src')));

// Passport Init
app.use(passport.initialize());

// Set our api routes
app.use('/api', api);
app.use('/api', auth);
app.use('/api/posts', posts);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

// Error Handlers
// Catch unauthorized errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message": err.name + ": " + err.message});
  }
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));