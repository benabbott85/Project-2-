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
>>>>>>> 20494ea108594510877c96b288366ef8b584c0c8
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