(function (description) {

    var data = require('../../data');

    description.save_description = function (req, res, next) {
        var person = req.body;
        res.setHeader('Content-Type', 'application/json');
        data.addDescription(person, function (err, descriptionSaved) {
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                console.log(descriptionSaved);
                res.json({ success: 1, description: "Description added" });
            }
        });
    }

    description.get_descriptions_by_type = function(req, res, next) {
        var type = req.swagger.params.type.value;
        data.getDescriptionsByType(type, function (err, descriptions) {
            res.setHeader('Content-Type', 'application/json');
            if (err) {
                var ret_err = {
                    "message": err
                };
                res.status(500).send(ret_err);
            }
            else {
                res.send(descriptions);
            }
        });
    }

})(module.exports);
