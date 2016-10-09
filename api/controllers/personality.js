(function (personality) {

    var data = require('../../data');

    personality.save_personality = function(req, res, next) {
        var personality = req.body;
        res.setHeader('Content-Type', 'application/json');
        data.addPersonality(personality, function (err, personalitySaved) {
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                console.log(personalitySaved);
                res.json({ success: 1, description: "Personality added" });
            }
        });         
    }

    personality.update_personality = function(req, res, next) {
        var personality_type = req.swagger.params.type.value;
        var user = req.body;
        res.json({ success: 1, description: "Not implemented" });
    }

    personality.get_personality = function(req, res, next) {
        var personality_type = req.swagger.params.type.value; 
        data.getPersonality(personality_type, function (err, personality) {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                console.log(personality);
                res.send(personality);
            }
        });
    }

    personality.get_all_personalities = function(req, res, next) {
        data.getAllPersonalities(function (err, personalities) {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                res.send(personalities);
            }
        });
    }

    personality.delete_personality = function(req, res, next) {
        var type = req.swagger.params.type.value;
        res.json({ success: 1, description: "Not implemented" });
    }
    
})(module.exports);