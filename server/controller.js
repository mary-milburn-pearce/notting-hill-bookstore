//MODULARIZATION WITH MODELS:
    const Book = require("./models")
    

//EXPORT OUR CONTROLLERS SO OUR ROUTES CAN ACCESS IT
module.exports = {

    getAllBooks:function(req, res){
        console.log(req.body, req.params);
        Book.find({}, function(err, books) {
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json(books);
            }
        })
    },

    getBook:function(req, res) {
        console.log(req.body, req.params);
        Book.findById(req.params.id, function(err, book) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(book);
            }
        })
    },

    addBook:function(req, res){
        console.log(req.body, req.params);
        Book.create(req.body, function(err, book) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(book);
            }
        })
    },

    addReview: function(req, res){
        Book.findById(req.params.id, function(err, data) {
            if (err) {
                res.json(err);
            }
            else {
                //data contains a Book object
                console.log('Data:', data);
                data.reviews.push(req.body);
                data.save();
                res.json(data);
            }
        });
    },

    updBook:function(req, res) {
        console.log("Reached updBook", req.body, req.params);
        Book.findByIdAndUpdate(req.params.id, req.body, 
            function(err, book) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(book);
                }
            })
    },

    remBook:function(req, res) {
        console.log(req.body, req.params);
        Book.findByIdAndDelete(req.params.id, function(err, book) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(book);
            }
        })
    },

    purchaseBook:function(req, res) {
        Book.findById(req.params.id, function(err, data) {
            if (err) {
                console.log('Purchase error:', err)
                res.json({message: "Error!", error: err});
            }
            else {
                //data contains a Book object
                data.numberInStock = data.numberInStock - 1;
                data.save();
                res.json(data);
            }
        });
    
    }

}
