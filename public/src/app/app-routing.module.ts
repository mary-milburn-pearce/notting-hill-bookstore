import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'chat',component: ChatComponent },
  { path: 'prod-updates',component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
