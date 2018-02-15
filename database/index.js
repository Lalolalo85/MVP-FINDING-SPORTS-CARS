var mysql = require('mysql');
var password = require('../passwords.js');

var con = mysql.createConnection({
  host:  "localhost",
  user:  "root",
  password: "",
  database: "review"
});

var selectAll = function(cb) {
  con.query('SELECT * FROM cars', (err, results, fields) => {
    if(err){
      cb(err, null);
    }else{
      cb(null, results);
    }
  });
};

var insertOne = function(make, model, cb) {
  con.query('INSERT INTO cars (make, model) VALUES (?, ?)',
[make, model], (err, results, fields) => {
  if(err) {
    cb(err, null);
  } else {
    console.log(results);
    cb(null, results);
  }
});
};

model.exports.selectAll = selectAll;
model.exports.insertOne = insertOne;
