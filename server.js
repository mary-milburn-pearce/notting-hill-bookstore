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
var counter = 0;

// io.on('connection', function (socket) { //2
  
//     socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
//     socket.on('thankyou', function (data) { //7
//       console.log(data.msg); //8 (note: this log will be on your server's terminal)
//     });
      
//   });