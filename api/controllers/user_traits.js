'use strict';

module.exports = { save_user_traits, update_user_traits, get_user_traits, delete_user_traits };

//POST /user operationId
function save_user_traits(req, res, next) {
    var user_traits = req.body;
    res.json({ success: 1, description: "User type part added" });
}

//PUT /movie/{id} operationId
function update_user_traits(req, res, next) {
    var userid = req.swagger.params.userid.value; //req.swagger contains the path parameters
    var user = req.body;

    res.json({ success: 1, description: "User type part updated" });

}

//GET /movie/{id} operationId
function get_user_traits(req, res, next) {
    var userid = req.swagger.params.userid.value; //req.swagger contains the path parameters
    var user_traits = {
        userid: "123",
        traits: [
            {
                trait: "Trustworthy",
                isme: "true",
            },
            {
                trait: "Lojal",
                isme: "true",
            },
            {
                trait: "Friendly",
                isme: "false",
            }
        ]
    };
    res.json(user_traits);
}

//DELETE /movie/{id} operationId
function delete_user_traits(req, res, next) {
    var userid = req.swagger.params.userid.value; //req.swagger contains the path parameters
    //if (db.remove(id)) {
    //    res.json({ success: 1, description: "Movie deleted!" });
    //} else {
    //    res.status(204).send();
    //}
    res.json({ success: 1, description: "User type part deleted!" });
}