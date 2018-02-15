var express = require('express');
var data = require('../database/data.js');
var bodyParser = require('body-parser'); // incoming data into JSON
var database = require('../database/index.js');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
