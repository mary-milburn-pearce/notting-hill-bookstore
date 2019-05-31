//Requires access to MODELS:
const Book = require("./models")

//EXPORT inventory CONTROLLERS SO server CAN ACCESS IT
module.exports = {
    getLowInventoryItems: function(callback) {
        Book.find({}, function(err, books) {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('getLowInv: got data');
            }
            callback({data: books});
        });
    }
    
}
