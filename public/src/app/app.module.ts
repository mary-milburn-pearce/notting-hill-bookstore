import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatService } from './chat.service';
import { UpdateService } from './update.service';
import { WebsocketService } from './websocket.service';
//import { LOCAL_STORAGE, StorageServiceModule } from 'ngx-webstorage-service';
import { CartService } from './cart.service';

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
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    BookFilterPipe,
    ChatComponent,
    DetailComponent,
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
    WebsocketService,
    CartService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
