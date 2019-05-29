import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'public';

  constructor(
    private _httpService: HttpService,
    private chat: ChatService
    ){}

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    })
  }

  sendMessage() {
    this.chat.sendMsg("Test Message");
    console.log("Message Sent");
  }
}
