//MODULARIZATION WITH MODELS:
    const Book = require("./models")

//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {

    getLowBooks:function(req, res){
        console.log(req.body, req.params);
        Book.find({}, function(err, books) {
            console.log(err, books);
            res.json({data: books});
        })
    }
}
