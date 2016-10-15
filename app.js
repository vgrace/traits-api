'use strict';
var http = require("http");
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 10010));

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.render('index');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
