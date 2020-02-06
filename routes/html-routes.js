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