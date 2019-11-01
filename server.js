// BASE SETUP
// ==============================================

var express = require('express');
var app     = express();
var port    =   process.env.PORT || 5000;

// ROUTES
// ==============================================

app.get('/', function(req, res) {
    res.send('home');  
});

app.get('/test', function(req, res) {
	res.send('HELLO WORLD');  
});

// START THE SERVER
// ==============================================
app.listen(port);
console.log('Magic happens on port ' + port);