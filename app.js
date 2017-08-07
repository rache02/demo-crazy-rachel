const PORT = 3000;
var express = require('express');
var app = express();
var request = require('request');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

//routes
app.get('/', function(req,res) {

  }
)

app.get('/users/new', function(req,res) {

  }
)

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
