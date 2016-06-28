require('dotenv').config();
require('./database/db/connect');
var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    path = require('path'),
    Question = require('./database/models/questions'),
    passport = require('passport'),
    User = require('./database/models/user');

var indexRoute = path.join(__dirname, 'test-index.html');

// app.use(express.static(path.join(__dirname, 'build/')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(passport.initialize())

app.get('/', function(req, res) {
  res.sendFile(indexRoute);
});

require('./database/routes/userAuth')(app, passport);

app.get('/users', function(req,res) {
  User.find({}, function(err, user) {
    res.json(user);
  })
})

app.set('port', process.env.NODE_PORT || 3000);

app.listen(app.get('port'),function() {
  console.log("Listeing on Port " + app.get('port'));
});