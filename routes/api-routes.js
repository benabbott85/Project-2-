const router = require("express").Router();

var db = require("../models");

router.get("/api/activetrip", function (req, res) {
    res.json({
        message: `Hello`
    })
})

router.post("/api/activetrip", function (req, res) {

    db.Trips.create({
        email: req.body.email,
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


router.post("/send", function (req, res, next) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kyleawkjell@gmail.com',
            pass: 'Abs10oulo'
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'kyleawkjell@gmail.com',
        subject: `Your trip itinerary!`,
        text: {
            flight: req.body.flight,
            hotel: req.body.hotel,
            destination: req.body.destination,
            budget: req.body.budget
        }
    };

    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            console.error('there was an error: ', err);
        } else {
            console.log('here is the res: ', res)
        }
    });
})

module.exports = router