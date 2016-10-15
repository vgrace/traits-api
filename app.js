//Just work work
var http = require("http");
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 10010));

//Opt into services
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', function (request, response) {
    response.render('index');
});



app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


//var data = require('./data');
//app.get('/api/personality', function (req, res) {
//    console.log("/api/personality");
//    data.getAllPersonalities(function (err, personalities) {
//        res.setHeader('Content-Type', 'application/json');
//        if (err) {
//            console.log("Error when getting");
//            var ret_err = {
//                "message": err
//            };
//            res.status(500).send(ret_err);
//        }
//        else {
//            res.send(personalities);
//        }
//    });
//});

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