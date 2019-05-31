//REQUIRE STATMENTS
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const inventory = require("./server/inventory")

//APP CONFIGURATION
app.use(bodyParser.json());

//HOOK UP TO ANGULAR
app.use(express.static(__dirname + '/public/dist/public'));

//ROUTES
require('./server/routes')(app)

//HTTP SERVER LISTEN
const server = app.listen(8000, function(){
    console.log("Listening on post 8000")
});

//CHAT MESSAGE SERVER LISTEN/RESPOND
const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
      console.log('user disconnected');
  });

  socket.on('message', function(msg){
      console.log('message: ' + msg);
      setTimeout(  () => { socket.emit('message', happyResponse());  },  4 * 1000);
  });
});

//LOW ITEM DATA RETRIEVAL AND BROADCAST
setInterval(() => {
    inventory.getLowInventoryItems(function(data){
//        console.log('sending update: ', data);
        io.emit('cart update', data);
    });
    }, 10000);

function happyResponse() {
    let responses = [
        "Welcome to our bookstore! We will be with you shortly!",
        "Thank you for your patience. We'll be right with you.",
        "What kind of book are you looking for today?",
        "Please use the search bar to find the perfect book!",
        "We will be happy to answer all of your questions.",
        "Would you like some help finding a book?"
        ];
    let rnd = Math.floor(Math.random() * Math.floor(responses.length));
    console.log(rnd);
    return responses[rnd]
}