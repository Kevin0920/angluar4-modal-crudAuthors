var mongoose = require('mongoose');
var path = require("path");

var Author  = mongoose.model("Author");
module.exports = {

    createAuthor: function (req, res) {
        console.log('from controller', req.body);

        let author = new Author({
            name: req.body.name
        });

        author.save(function (err) {
            if (err) {
                res.json({err : err});
            } else {
                res.json('Success');
            }
        })
    },

    getAllAuthors: function (req, res) {
        Author.find({}).sort('createdAt').exec(function (err, authors) {
            if (err) {
                res.json({err : err});
            } else {
                res.json(authors);
            }
        })
    },

    delete: function (req, res) {
        Author.remove({
            _id: req.params.id
        }, function (err) {
            if (err) {
                res.json({ err: err});
            } else {
                res.redirect(303, '/authors');
            }
        })
    }

}