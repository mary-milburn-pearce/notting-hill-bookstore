import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class ChatService {

  messages: Subject<any>;

  constructor(private wsService: WebsocketService)  {
    this.messages = <Subject<any>>wsService
      .connectChat()
      .map((response: any): any => {
        console.log('chat response:', response);
        return response;
      })
   }

   sendMsg(msg) {
     this.messages.next(msg);
   }

}

