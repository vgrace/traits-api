(function (people) {

    var data = require('../../data');

    people.save_people = function(req, res, next) {
        var person = req.body;
        res.setHeader('Content-Type', 'application/json');
        data.addPerson(person, function (err, personSaved) {
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                console.log(personSaved);
                res.json({ success: 1, description: "Person added" });
            }
        });
    }

    people.get_people_by_type = function (req, res, next) {
        var type = req.swagger.params.type.value;
        data.getPeopleByType(type, function (err, people) {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                res.send(people);
            }
        });
    }

    people.get_all_people = function(req, res, next) {
        data.getAllPeople(function (err, people) {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                res.send(people);
            }
        });
    }

})(module.exports);
