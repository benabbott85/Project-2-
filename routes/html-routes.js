var path = require("path");
const router = require("express").Router();

const testObj = {
    message: "works"
}


    router.get("/test", function (req, res) {
        // res.sendFile(path.join(__dirname, "../view/layouts/main.handlebars"));
        res.render("index", testObj)
    });


    router.get("/cms", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/cms.html"));
    });


    router.get("/blog", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    module.exports = router