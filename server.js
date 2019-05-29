//REQUIRE STATMENTS
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//APP CONFIGURATION
app.use(bodyParser.json());

//HOOK UP TO ANGULAR
app.use(express.static(__dirname + '/public/dist/public'));

//ROUTES
require('./server/routes')(app)

//SERVER LISTEN
const server = app.listen(8000, function(){
    console.log("Listening on post 8000")
});

const io = require('socket.io')(server);
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
      console.log('user disconnected');
  });
  socket.on('message', function(msg){
      console.log('message: ' + msg);
      socket.emit('message', 'Welcome to our bookstore! We will be with you shortly!');
  });
});


// function startProductUpdates(io) {

//   setInterval(() => {
//     data = queryLowProducts(10);
    
//   }, interval);

// }