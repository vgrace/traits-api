'use strict';

// Include our "db"
//var db = require('../../config/db')();
// Exports all the functions to perform on the db
module.exports = { save_user_type_part, update_user_type_part, get_user_type_part, delete_user_type_part };

//POST /user operationId
function save_user_type_part(req, res, next) {
    var user_type_part = req.body; 
    res.json({ success: 1, description: "User type part added" });
}

//PUT /movie/{id} operationId
function update_user_type_part(req, res, next) {
    var userid = req.swagger.params.userid.value; //req.swagger contains the path parameters
    var user = req.body;
    
    res.json({ success: 1, description: "User type part updated" });

}

//GET /movie/{id} operationId
function get_user_type_part(req, res, next) {
    var userid = req.swagger.params.userid.value; //req.swagger contains the path parameters
    var user_type_part = {
        userid: "123", typepercentage: [
            {
                type: "INTJ",
                percentage: "98",
                lastupdate: "2016-09-30T07:32:48.545Z"
            },
            {
                type: "ESFJ",
                percentage: "12",
                lastupdate: "2016-09-30T07:32:48.545Z"
            },
            {
                type: "INFJ",
                percentage: "64",
                lastupdate: "2016-09-30T07:32:48.545Z"
            }
        ]
    };
    res.json(user_type_part);
}

//DELETE /movie/{id} operationId
function delete_user_type_part(req, res, next) {
    var userid = req.swagger.params.userid.value; //req.swagger contains the path parameters
    //if (db.remove(id)) {
    //    res.json({ success: 1, description: "Movie deleted!" });
    //} else {
    //    res.status(204).send();
    //}
    res.json({ success: 1, description: "User type part deleted!" });
}