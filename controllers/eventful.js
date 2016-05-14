var express = require('express');
var db = require("../models");
var ejsLayout = require("express-ejs-layouts");
var request = require('request');
var bodyParser = require('body-parser');
var router = express.Router();



request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
});









module.exports = router;