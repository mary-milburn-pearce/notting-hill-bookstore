import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'public';
  message: String;

  constructor(private _httpService: HttpService){}

  ngOnInit() {}

  sendMessage() {
    
  }
  // io.on('item_in_cart', function (socket) { //2
  
  //   socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  //   socket.on('thankyou', function (data) { //7
  //     console.log(data.msg); //8 (note: this log will be on your server's terminal)
  //   });
      
  // });
}
