'use strict';

// Include our "db"
//var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = { save_user, update_user, get_user, delete_user };

//POST /user operationId
function save_user(req, res, next) {
    var user = req.body;
    res.json({ success: 1, description: "User added to the list!" });
}

//PUT /movie/{id} operationId
function update_user(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var user = req.body;
    //Update user 

    //if (db.update(id, movie)) {
    //    res.json({ success: 1, description: "Movie updated!" });
    //} else {
    //    res.status(204).send();
    //}
    res.json({success: 1, description: "User updated"});

}

//GET /movie/{id} operationId
function get_user(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var user = { id: "123", email: "me@mail.com", password: "KJALDKLASDKLJA123KJ"}; //db.find(id);
    //if (movie) {
    //    res.json(movie);
    //} else {
    //    res.status(204).send();
    //}
    res.json(user); 
}

//DELETE /movie/{id} operationId
function delete_user(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    //if (db.remove(id)) {
    //    res.json({ success: 1, description: "Movie deleted!" });
    //} else {
    //    res.status(204).send();
    //}
    res.json({ success: 1, description: "User deleted!" });
}