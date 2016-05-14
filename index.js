var express = require('express');
var app = express();
var router = express.Router();
var ejsLayout = require("express-ejs-layouts");
var request = require('request');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayout);
// app.use(express.static(__dirname + '/static'));


app.get('/', function(req, res){
  res.send('hello Emilie');
});





app.listen(3000);