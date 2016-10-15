
var http = require("http");
var express = require('express');
var app = express();
var routes = require('./routes/index');
app.set('port', (process.env.PORT || 10010));

app.use(express.static(__dirname + '/public'));
app.use('/', routes);
//app.get('/', function (request, response) {
//    response.render('index');
//});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});