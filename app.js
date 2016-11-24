var express = require('express');
var expHbrs = require('express-handlebars');
var routes = require('./routes/route.js');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine','handlebars');
app.engine('handlebars', expHbrs({defaultLayout:'main'}));

// routing
app.get('/',routes.home);
app.get('/:city',routes.city);

// creating server on specified port
var port = process.env.PORT || 5000;
var server = app.listen(port, function(req, res){
    console.log('server is running on : '+ port);
});