const Author = require("../models/author.model");

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body) 
            .then((newAuthor) => res.json(newAuthor)) 
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    findAllAuthors: (req, res) => {
        Author.find({})
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
        .then((oneAuthor) => res.json(oneAuthor)) 
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
        .then((updatedAuthor) => res.json(updatedAuthor))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    deleteAuthor: (req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
    }
}