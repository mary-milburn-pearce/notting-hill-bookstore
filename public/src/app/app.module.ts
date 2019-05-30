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
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { BookFilterPipe } from './list/list-filter.pipe';
import { ChatComponent } from './chat/chat.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    BookFilterPipe,
    ChatComponent,
    CartComponent
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
    UpdateService,
    WebsocketService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
