const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) { return done(err); }

      // Return if no user found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }

      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'password is wrong'
        });
      }

      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));