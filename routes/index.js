var express = require('express');
var router = express.Router();
var helloController = require('../api/controllers/hello_world');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/api/hello/:name', function (req, res) {
    helloController.hello(req, res); 
});
module.exports = router;