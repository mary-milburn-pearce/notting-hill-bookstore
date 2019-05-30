import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
import { ChatService } from './chat.service';
import { UpdateService } from './update.service';
import { WebsocketService } from './websocket.service';
import { LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';

//const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    //StorageServiceModule
  ],
  providers: [
    HttpService, 
    ChatService,
    UpdateService,
    WebsocketService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
