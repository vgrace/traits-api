(function (usertypepart) {

    var data = require('../../data');

    usertypepart.save_user_type_part = function(req, res, next) {
        var user_type_part = req.body;
        res.setHeader('Content-Type', 'application/json');
        data.addUserTypeParts(user_type_part.username, user_type_part.type_percentage, function (err) {
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                res.json({ success: 1, description: "User type part added" });
            }
        });
        
    }

    usertypepart.update_user_type_part = function(req, res, next) {
        var username = req.swagger.params.username.value;
        var user = req.body;
        res.json({ success: 1, description: "Not yet implemented" });
    }

    usertypepart.get_user_type_part = function(req, res, next) {
        var username = req.swagger.params.username.value;
        res.json({ success: 1, description: "Not yet implemented" });
    }

    usertypepart.delete_user_type_part = function(req, res, next) {
        var username = req.swagger.params.username.value; 
        res.json({ success: 1, description: "Not yet implemented" });
    }

})(module.exports);