var { Post } = require("../models");

module.exports = function (app) {

    app.get("/api/posts/:past", function (req, res) {

        Post.findAll({}).then(posts => {
            res.json(post)
        })

    });

    app.get("/api/posts/:upcoming", function (req, res) {

        Post.findAll({}).then(posts => {
            res.json(post)
        })

    });

    app.get("/api/posts/:active", function (req, res) {

        Post.findAll({}).then(posts => {
            res.json(post)
        })

    });


    app.post("/api/posts/:past", function (req, res) {
        Post.create(req.body).then(post => {

        })
    });

    app.post("/api/posts/:upcoming", function (req, res) {
        Post.create(req.body).then(post => {

        })
    });

    app.post("/api/posts/:active", function (req, res) {
        Post.create(req.body).then(post => {

        })
    });
}




//       app.get("/api/posts/category/:category", function(req, res) {

//         Post.findAll({
//             where: {
//               category: req.params.category
//             }
//          }).then(posts => {
//            res.json(post)
//          })

//         });

//         app.get("/api/posts/:id", function(req, res) {
//             Posts.findOne({
//                 where: {
//                   id: req.params.id
//                 }
//               }).then(posts => {
//                 res.json(post)
//               })
//             });

//         app.post("/api/posts", function(req, res) {
//             Post.create (req.body).then(post => {

//                 })
//               });

//         app.delete("/api/posts/:id", function(req, res) {
//             Post.destroy({
//                 where: {
//                     id: req.params.id
//                   }
//                 }).then(post =>{
//                   res.json(post)
//                 })

//               });

//               app.put("/api/posts", function(req, res) {

//                 Post.update({
//                   title: req.body.title,
//                   body: req.body.body,
//                   category: req.body.category
//                 }, {
//                   where: {
//                     id: req.body.id
//                   }
//                 }).then(post => {
//                   res.json(post)
//                 })
//               });


// }