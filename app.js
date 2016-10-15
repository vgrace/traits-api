//Just work work

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/api'));

var data = require('./data');

app.set('port', (process.env.PORT || 10010));



app.get('/', function (request, response) {
    response.render('index');
});

app.get('/api/personality', function (req, res) {
    console.log("/api/personality"); 
    data.getAllPersonalities(function (err, personalities) {
        res.setHeader('Content-Type', 'application/json');
        if (err) {
            console.log("Error when getting"); 
            var ret_err = {
                "message": err
            };
            res.status(500).send(ret_err);
        }
        else {
            res.send(personalities);
        }
    });
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});

//var SwaggerExpress = require('swagger-express-mw');
//var express = require('express');
//var app = express();
//module.exports = app; // for testing

////var routes = require('./routes/index.js');
////app.set('port', (process.env.PORT || 10010));

//app.use(express.static(__dirname + '/public'));
////app.use('/', routes);
//app.get('/', function (request, response) {
//    response.render('index');
//});

////app.listen(app.get('port'), function () {
////    console.log('Node app is running on port', app.get('port'));
////});

//var config = {
//    appRoot: __dirname // required config
//};

//SwaggerExpress.create(config, function (err, swaggerExpress) {
//    if (err) { throw err; }

//    // install middleware
//    swaggerExpress.register(app);

//    var port = process.env.PORT || 10010;
//    app.listen(port);

//    if (swaggerExpress.runner.swagger.paths['/hello']) {
//        console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
//    }
//});

//module.exports = app;