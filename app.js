var express = require('express');
var expHbrs = require('express-handlebars');
var routes = require('./routes/route');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view-engine','handlebars');

app.engine('handlebars', expHbrs({defaultLayout:'main'}));

app.get('/',routes.home);
app.get('/:city',routes.city);

var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res){
    console.log('server is running on : '+ port);
});