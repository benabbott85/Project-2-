const router = require("express").Router();

var db =  require("../models");

router.get("/api/activetrip", function (req, res) {
    res.json({
        message: "hello"
    })
})

router.post("/api/activetrip", function (req, res) {

    db.Trips.create({
        flight: req.body.flight,
        hotel: req.body.hotel,
        destination: req.body.destination,
        budget: req.body.budget
    }).then(function (dbTrips) {
        res.json(dbTrips.dataValues);
    }).catch(function (err) {
        if (err) throw err;
    })

});


module.exports = router