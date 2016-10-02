'use strict';

module.exports = { save_people, update_people, get_people, get_all_people, delete_people };

//POST /user operationId
function save_people(req, res, next) {
    var people = req.body;
    res.json({ success: 1, description: "People added" });
}

//PUT /movie/{id} operationId
function update_people(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var user = req.body;

    res.json({ success: 1, description: "People updated" });

}

//GET /movie/{id} operationId
function get_people(req, res, next) {
    var id = req.swagger.params.id.value; //req.swagger contains the path parameters
    var people = {
        id: "123",
        name: "Michelle",
        lastname: "Obama",
        occupation: "First lady",
        isreal: "true",
        from: "",
        personalitytype: "INTJ"
    };
    res.json(people);
}

//GET /personality operationId
function get_all_people(req, res, next) {
    var people = [
        {
            id: "123",
            name: "Michelle",
            lastname: "Obama",
            occupation: "First lady",
            isreal: "true",
            from: "",
            personalitytype: "INTJ"
        },
        {
            id: "233",
            name: "Stephen",
            lastname: "Hawking",
            occupation: "Physisist",
            isreal: "true",
            from: "",
            personalitytype: "INTJ"
        }
    ];
    res.json(people);
}

//DELETE /movie/{id} operationId
function delete_people(req, res, next) {
    var id = req.swagger.params.id.value;
    res.json({ success: 1, description: "People deleted!" });
}