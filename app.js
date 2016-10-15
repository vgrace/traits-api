'use strict';
var http = require("http");
var path = require('path');
var express = require("express");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var SwaggerExpress = require('swagger-express-mw');
var routes = require('./routes/index');

var app = express();
app.set('port', (process.env.PORT || 10010));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Opt into services
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//set the public static resource folder (makes the public folder public and accessible from the browser)
app.use(express.static(__dirname + "/public"));
app.use('/', routes);

app.get('/', function (request, response) {
    response.render('pages/index');
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};


//SwaggerExpress.create(config, function(err, swaggerExpress) {
//  if (err) { throw err; }

//  // install middleware
//  swaggerExpress.register(app);

//  var port = process.env.PORT || 10010;
//  app.set('port', port);
//  app.listen(port);

//  if (swaggerExpress.runner.swagger.paths['/hello']) {
//    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
//  }
    
//  console.log("Listening on port: " + port); 
//});

