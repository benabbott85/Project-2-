var path = require("path");
const router = require("express").Router();

router.get("/", function (req, res) {
    res.render("index")
});

router.get("/newbudget", function (req, res) {
    res.render("newbudget")
})
router.get("/calendar", function (req, res) {
    res.render("calendar")
})
router.get("/past", function (req, res) {
    res.render("pasttrip")
})
router.get("/upcoming", function (req, res) {
    res.render("upcoming")
})
router.get("/active", function (req, res) {
    res.render("active")
})

module.exports = router