//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/books', controller.getAllBooks)  
    app.get('/books/:id', controller.getBook)
    app.post('/books', controller.addBook) 
    app.put('/books/:id', controller.updBook)
    app.delete('/books/:id', controller.remBook)
    app.post('/books/:id/review', controller.addReview)
}
