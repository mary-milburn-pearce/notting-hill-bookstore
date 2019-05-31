import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  private socket; 

  constructor() { }

  connectChat(): Rx.Subject<MessageEvent> {
    //this.socket = io(environment.ws_url);
    this.socket = io('localhost:8000');

    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        console.log("Received a message from websocket server")
        observer.next(data);
      })
      return() => {
        this.socket.disconnect();
      }
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('message', JSON.stringify(data));
      }
    };

    return Rx.Subject.create(observer, observable);
  }
 
  connectUpdates(): Rx.Subject<MessageEvent> {
    this.socket = io('localhost:8000');

    let observable = new Observable(observer => {
      this.socket.on('cart update', (data) => {
        console.log("Received a cart update")
        observer.next(data);
      })
      return() => {
        this.socket.disconnect();
      }
    });

    let observer = {
      next: (data: Object) => {
        this.socket.emit('ignore', JSON.stringify(data));
      }
    };

    return Rx.Subject.create(observer, observable);
  }
}
