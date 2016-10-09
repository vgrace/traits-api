(function (usertraits) {

    var data = require('../../data');

    usertraits.save_user_traits = function(req, res, next) {
        var user_traits = req.body;
        res.setHeader('Content-Type', 'application/json');
        data.addUserTraits(user_traits.username, user_traits.traits, function (err) {
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                res.json({ success: 1, description: "User traits added" });
            }
        });
        
    }

    usertraits.update_user_traits = function(req, res, next) {
        var username = req.swagger.params.username.value;
        var user = req.body;

        res.json({ success: 1, description: "Not yet implemented" });

    }

    usertraits.get_user_traits = function(req, res, next) {
        var username = req.swagger.params.username.value;
        res.json({ success: 1, description: "Not yet implemented" });
    }

    usertraits.delete_user_traits = function(req, res, next) {
        var username = req.swagger.params.username.value; 
        res.json({ success: 1, description: "Not yet implemented" });
    }

})(module.exports);