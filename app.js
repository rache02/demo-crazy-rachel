const PORT = 3000;
var express = require('express');
var app = express();
var request = require('request');
var mongo = require('mongodb')
var MongoClient = mongo.MongoClient
var Server = mongo.Server;
var assert = require('assert');
var session = require('express-session')

// Connection URL
var url = 'mongodb://localhost:27017/democrazy';

function dbCall(query, code) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connented to Database");
    query(db);
    db.close();
  });
}

function getUser(db,code) {
  cursor = db.collection('users').find({code: code})
  result = cursor.toArray()
  if (result.length > 0) {
    console.log("it worked");
  } else {
    console.log("somethings wrong");
  }
}

function getAllUsers(db) {
  db.users.find();
}

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

//routes
app.get('/', function(req,res) {
  res.render('login');
});

app.post('/login', function(req,res) {
  var inputCode = req.query['code'];

  dbCall(getUser, inputCode)
})

app.post('/session', function(req,res) {

});

app.get('/users/:id', function(req,res) {

});

app.patch('/users/:id', function(req,res) {

});

app.get('/users', function(req,res) {

});

app.post('/users/:id/votes', function(req,res) {

});

app.delete('/users/:id/votes', function(req,res) {

});

app.delete('/session', function(req,res) {

});

app.listen(PORT, function() {
  console.log(`Server now listening on port ${PORT}`);
  }
)
