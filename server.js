// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 5000;

// ROUTES
// ==============================================

app.get('/', function(req, res) {
<<<<<<< HEAD
    res.send('home');
});

app.get('/test', function(req, res) {
	res.send('HELLO WORLD');
=======
    res.send('home');  
});

app.get('/test', function(req, res) {
	res.send('HELLO WORLD');  
>>>>>>> a6fb647cc49b385f24968edbb25c234d3afb6833
});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);