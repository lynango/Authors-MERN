// author: name

const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {type: String, 
            required: [true, "A name is required"],
            minlength: [3, "The author's name must be at least 3 chracters long"],
        }},
            {timestamps: true})

    const Author = mongoose.model("Author", AuthorSchema);

    module.exports = Author;