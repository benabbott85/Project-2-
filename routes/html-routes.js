const router = require("express").Router();

router.get("/", function (req, res) {
    res.render("index")
});
router.get("/newbudget", function (req, res) {
<<<<<<< HEAD
    /*
    db.Trip.findAll({
        
        //do stuff with database

    }).then(function(dbData) {
       res.render("newbudget", dbData)
    });
    */
    
    // res.render("newbudget", {
    //     test: "hello"
    // })
=======

>>>>>>> 81e493980a51865d6eac81e5501fd9beed97a5de
    res.render("newbudget")
})

router.get("/calendar", function (req, res) {
    res.render("calendar")
})
router.get("/pasttrip", function (req, res) {
    res.render("pasttrip")
})
router.get("/upcoming", function (req, res) {
    res.render("upcoming")
})
router.get("/activetrip", function (req, res) {
    res.render("activetrip")
})

module.exports = router