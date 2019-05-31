import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';

//const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { BookFilterPipe } from './list/list-filter.pipe';
import { ChatComponent } from './chat/chat.component';
import { DetailComponent } from './detail/detail.component';
// import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    BookFilterPipe,
    ChatComponent,
    DetailComponent,
    // CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HttpService, 
    ChatService,
    WebsocketService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
