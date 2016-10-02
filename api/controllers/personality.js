'use strict';

module.exports = { save_personality, update_personality, get_personality, get_all_personalities, delete_personality };

//POST /user operationId
function save_personality(req, res, next) {
    var personality = req.body;
    res.json({ success: 1, description: "Personality added" });
}

//PUT /movie/{id} operationId
function update_personality(req, res, next) {
    var personality_type = req.swagger.params.type.value; //req.swagger contains the path parameters
    var user = req.body;

    res.json({ success: 1, description: "Personality updated" });

}

//GET /movie/{id} operationId
function get_personality(req, res, next) {
    var personality_type = req.swagger.params.type.value; //req.swagger contains the path parameters
    var personality = {
        id: "123",
        type: "INTJ",
        totalfrequency: "2",
        malefrequency: "1",
        femalefrequency: "<0.8",
        description: "afhafajhfja",
        typefull: "Introvert, Intuition, Thinking, Judging",
        color: "#C0C0C0"
    };
    res.json(personality);
}

//GET /personality operationId
function get_all_personalities(req, res, next) {
    var personalities = [
        {
            id: "123",
            type: "INTJ",
            totalfrequency: "2",
            malefrequency: "1",
            femalefrequency: "<0.8",
            description: "afhafajhfja",
            typefull: "Introvert, Intuition, Thinking, Judging",
            color: "#C0C0C0"
        },
        {
            id: "123",
            type: "INFJ",
            totalfrequency: "2",
            malefrequency: "1",
            femalefrequency: "2",
            description: "sgfsadgfsd",
            typefull: "Introvert, Intuition, Feeling, Judging",
            color: "#505050"
        }
    ];
    res.json(personalities); 
}

//DELETE /movie/{id} operationId
function delete_personality(req, res, next) {
    var type = req.swagger.params.type.value;
    res.json({ success: 1, description: "Personality deleted!" });
}