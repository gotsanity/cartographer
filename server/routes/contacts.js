const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/contacts');
const jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.SHOELACES_USER_SECRET_KEY,
  userProperty: 'payload'
});

/* GET api listing. */
router.get('/', (req, res) => {
  Contact.find({}, function(err, contacts) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(contacts);
    }
  });
});

router.post('/add', (req, res) => {
  var newContact = Contact({
    name: req.body.name,
    email: req.body.email,
    categories: req.body.categories
  });

  newContact.save(function(err, contact) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(contact);
    }
  })
});

router.get('/:id', (req, res) => {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(contact);
    }
  });
});

router.put('/:id', (req, res) => {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) {
      res.status(500).json(err);
    } else {
      if (!req.body.name || !req.body.email || !req.body.categories) {
        res.status(500).json({"message": "missing fields"});
      } else {
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.categories = req.body.categories;

        contact.save(function(err, savedcontact) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(savedcontact);
          }
        });
      }
    }
  });
});

router.delete('/:id', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, function(err, contact) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({"message": req.params.id + " successfully removed."});
    }
  });
});

module.exports = router;