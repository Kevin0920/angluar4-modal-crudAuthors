var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;


var AuthorSchema = new mongoose.Schema({
    name: {type: String, minlength: 3, required: true}
}, {timestamps: true})

var Author = mongoose.model('Author', AuthorSchema);