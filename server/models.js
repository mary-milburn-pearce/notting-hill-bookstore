////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/books_db');

    const AuthorSchema = new mongoose.Schema({
        firstName: {type: String, required: [true, "Author's first name is required"]},
        lastName: {type: String, required: [true, "Author's last name is required"]},
        bioSummary: {type: String}
    }, {timestamps: true})
    const ReviewSchema = new mongoose.Schema({
        points: {type: Number, required: [true, "Rating must include point value"]},
        comment: {type: String, required: [false]},
    }, {timestamps: true})
    var BookSchema = new mongoose.Schema({
        title: {type: String, required: true, minlength: 4},
        price: {type: Number, required: true},
        imageUrl: {type: String, required: false},
        authors: [AuthorSchema],
        reviews: [ReviewSchema],
        releaseDate: {type: Date, requred: true},
        description: {type: String},
        // destination: {type: String, required: true},
        // numberInStock: {type: Number, required: true},
        reviewAverage: {type: Number}
    }, {timestamps: true});
    mongoose.model('Book', BookSchema); // We are setting this Schema in our Models as 'Book'
    var Book = mongoose.model('Book');

    ////Export Book so Controllers has access to it
    module.exports = Book;