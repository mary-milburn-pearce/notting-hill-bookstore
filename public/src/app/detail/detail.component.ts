import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  book: object;
  show: any;

  constructor(
    private _cart: CartService,
    private _httpService: HttpService, 
    private _router:Router, 
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.findBook();
    this.show = {imageUrl: "", title: "", firstName: "" , lastName: "" , summary: "", price: ""};
  }
  findBook(){
    this._route.params.subscribe((params)=>{
      console.log("id:", params['id'])
      let obs = this._httpService.getOneBook(params["id"])
      obs.subscribe((data: any)=>{
        this.show = data;
        console.log("Component: show book", this.show)
      })
    })
  }
  addToCart(book) {
    this._cart.addToCart(book);
  }
}
