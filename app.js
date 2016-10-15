'use strict';
var SwaggerExpress = require('swagger-express-mw');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

var config = {
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) { throw err; }

    // install middleware
    swaggerExpress.register(app);

    var port = process.env.PORT || 10010;
    app.listen(port);

    if (swaggerExpress.runner.swagger.paths['/hello']) {
        console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
    }
});

module.exports = app; // for testing

//var http = require("http");
//var express = require('express');
//var app = express();

//app.set('port', (process.env.PORT || 10010));

//app.use(express.static(__dirname + '/public'));

//app.get('/', function (request, response) {
//    response.render('index');
//});

//app.listen(app.get('port'), function () {
//    console.log('Node app is running on port', app.get('port'));
//});