import { Component, OnInit } from '@angular/core';
//import { HttpService } from '../http.service';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages = [];
  msgInput: string="";

  constructor(
    //private _httpService: HttpService,
    private chat: ChatService
    ){}

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log('From subscription:', msg);
      this.processResponse(msg);
    })
  }

  sendMsg() {
    console.log('Sending Message:', this.msgInput);
    this.chat.sendMsg(this.msgInput);
    this.messages.push(this.msgInput);
    this.msgInput = "";
  };

  processResponse(resp) {
    this.messages.push(resp);
  }

}
