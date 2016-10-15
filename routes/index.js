var express = require('express');
var router = express.Router();
var personality = require('../api/controllers/personality');

/* GET home page. */
router.get('/', function (req, res) {
    //res.render('index', { title: 'Traits api' });
    res.render('index');
});

router.get('/api/personality', function (req, res) {
    //res.send({ test: 'Hello handsome: ' + req.query.test });
    personality.get_all_personalities(req, res, function () {
        console.log('Get all personalities');
    });
})

//router.get('/analytics/v0_1_0/poweranalysisday/:resultsid', function (req, res) {
//    var id = req.params.resultsid;
//    //res.send({ test: 'Get analytics - test: ' + req.query.test + ', id: ' + id }); 
//    analysis.get_poweranalysisday_result(req, res, function () {
//        console.log('GET');
//    });
//});

//router.post('/analytics/testing/:id', function (req, res) {
//    analysis.testing(req, res, function () {
//        console.log('testing');
//    });
//});

module.exports = router;