import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { DetailComponent } from './detail/detail.component';
import { ChatComponent } from './chat/chat.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path: "", pathMatch:"full", component: HomeComponent},
  {path: "books", component: ListComponent},
  {path: "books/detail/:id", component: DetailComponent},
  {path: 'chat',component: ChatComponent },
  { path: 'prod-updates',component: CartComponent }
  // {path: "products/new", component: CreateComponent},
  // {path: "products/edit/:id", component: EditComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
