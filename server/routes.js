//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")
const path = require('path');

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/api/books', controller.getAllBooks)  
    app.get('/api/books/:id', controller.getBook)
    app.get('/api/books/:id/purchase', controller.purchaseBook)
    app.post('/api/books', controller.addBook) 
    app.put('/api/books/:id', controller.updBook)
    app.delete('/api/books/:id', controller.remBook)
    app.post('/api/books/:id/review', controller.addReview)
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
