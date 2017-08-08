const PORT = 3000;
var express = require('express');
var app = express();
var request = require('request');
var mongo = require('mongodb')
var MongoClient = mongo.MongoClient
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/test';

//create test
function dbCall(query) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connented to Database");
    query(db);
    db.close();
  });
}

function getAllUsers(db) {
  db.users.find();
}

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

//routes
app.get('/', function(req,res) {
  dbCall(getAllUsers)
})

app.get('/users/new', function(req,res) {

  }
);

app.post('/users', function(req,res) {

  }
)

app.get('/dashboard', function(req,res) {

  }
)

app.post('/users/:id/votes', function(req,res) {

  }
)

app.delete('/users/:id/votes', function(req,res) {

  }
)

app.listen(PORT, function() {
  console.log(`Server now listening on port ${PORT}`);
  }
)
