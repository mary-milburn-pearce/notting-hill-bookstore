import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Observable, Subject } from 'rxjs/Rx';

@Injectable()
export class UpdateService {

  updates: Subject<any>;

  constructor(private wsService: WebsocketService)  {
    this.updates = <Subject<any>>wsService
      .connectUpdates()
      .map((response: any): any => {
        return response;
      })
   }

   sendMsg(msg) {
     this.updates.next(msg);
   }

}
