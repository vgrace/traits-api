
(function (user) {
    
    var auth = require('../../auth');
    var data = require('../../data');

    user.save_user = function(req, res, next) {
        var user = req.body;
        auth.register(user, function (err, createduser) {
            res.setHeader('Content-Type', 'application/json');
            if(err){
                var ret_err = {
                    "message": err
                }; 
                res.status(500).send(ret_err); 
            }
            else{  
                console.log(createduser); 
                res.send(createduser); 
            }
        }); 
    }

    user.update_user = function (req, res, next) {
        var username = req.swagger.params.username.value;
        var user = req.body; //name and lastname
        console.log(username);
        console.log(user);
        data.updateUser(username, user, function (err, updateduser) {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                res.json({ success: 1, description: "User updated" });
            }
        });
    }

    user.get_user = function (req, res, next) {
        var username = req.swagger.params.username.value;
        console.log(username);
        data.getUser(username, function (err, user) {
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                console.log(user);
                res.send(user);
            }
        }); 
    }

    user.delete_user = function (req, res, next) {
        var username = req.swagger.params.username.value;
        res.setHeader('Content-Type', 'application/json');
        res.json({ success: 1, description: "Delete user, not implemented yet!" });
    }

    user.user_signin = function (req, res, next) {
        var user_creds = req.body;
        auth.checkuser(req.body.email, req.body.password, function (err, user) {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                var ret_err = {
                    "message": "User validation failed"
                };
                res.status(500).send(ret_err);
            }
            else {
                console.log(user);
                res.send(user);
            }
        });
    }
})(module.exports);
