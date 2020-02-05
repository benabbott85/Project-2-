var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;
const htmlRoutes = require("./routes/html-routes.js");
const apiRoutes = require("./routes/api-routes.js");

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(htmlRoutes);
app.use(apiRoutes);

db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});