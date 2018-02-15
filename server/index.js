var express = require('express');
var data = require('../database/data.js');
var bodyParser = require('body-parser'); // incoming data into JSON
var database = require('../database/index.js');
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

//handle get requests to cars
app.get('/cars', function(req, res){
  database.selectAll((err,results) => {
    if(err) {
      console.log('hitting database fool');
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  })
})

//handle post requests to groceries
app.post('/cars', function(req, res){
  //update data object with new object from my req.body
  let model  = req.body.model;
  let make   = req.body.make;
  //send the updated data object back

if(!make) {
  res.sendStatus(400);
} else {
  database.insertOne(make, model, (err, results) => {
    if(err) {
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
}

});

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});
