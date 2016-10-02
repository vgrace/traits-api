'use strict';

module.exports = { save_description, update_description, get_description, get_descriptions_by_type, delete_description };

//POST /user operationId
function save_description(req, res, next) {
    var description = req.body;
    res.json({ success: 1, description: "description added" });
}

//PUT /movie/{id} operationId
function update_description(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var description = req.body;

    res.json({ success: 1, description: "description updated" });

}

//GET /movie/{id} operationId
function get_description(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var description = {
        id: "123",
        title: "fdsfs",
        description: "add",
        tags: "one,two",
        source: "asd",
        timestamp: "2016-09-30T07:32:48.545Z",
        personalitytype: "INTJ"
    };
    res.json(description);
}

//GET /personality/{type} operationId
function get_descriptions_by_type(req, res, next) {
    var type = req.swagger.params.type.value;
    var descriptions = [
        {
            id: "123",
            title: "fdsfs",
            description: "add",
            tags: "one,two",
            source: "asd",
            timestamp: "2016-09-30T07:32:48.545Z",
            personalitytype: "INTJ"
        },
        {
            id: "456",
            title: "fdsfs",
            description: "add",
            tags: "one,two",
            source: "asd",
            timestamp: "2016-09-30T07:32:48.545Z",
            personalitytype: "INTJ"
        }
    ];
    res.json(descriptions);
}

//DELETE /movie/{id} operationId
function delete_description(req, res, next) {
    var id = req.swagger.params.id.value;
    res.json({ success: 1, description: "description deleted!" });
}