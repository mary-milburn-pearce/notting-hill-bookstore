import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { UpdateService } from '../update.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  contents = [];
  totalBill = 0;
  confirmation = "";

  constructor(
    private update: UpdateService,
    private _cart: CartService,
    private _http: HttpService
  ) { }

  ngOnInit() {
    this.update.updates.subscribe(data => {
      this.processUpdate(data);
    });
    this.getContents();
    this.totalBill = this._cart.cartTotalBill();
  }

  processUpdate(data) {
    for (let i = 0; i<data.length; i++) {
      for (let j = 0; j < this.contents.length; j++) {
        if (data[i]._id === this.contents[j]._id) {
          this.contents[j].numberInStock = data[i].numberInStock;
        }
      }
    }
  }
  
  getContents() {
    this.contents = [];
    if ("cart" in localStorage) {
      this.contents = JSON.parse(localStorage.getItem('cart'));
    }
  }

  removeItem(book) {
    let i = 0;
    while (this.contents[i] != book) {
      i++;
    }
    this.totalBill -= this.contents[i].price;
    this.contents.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(this.contents));
  }

  clearItems() {
    this.contents = [];
    localStorage.setItem("cart", JSON.stringify(this.contents));
    this.totalBill = 0;
  }

  purchaseItems() {
    if (this.totalBill === 0) return;
    let purchase = [];
    let totalCost = 0;
    for (let i=0; i<this.contents.length; i++) {
      if (this.contents[i].numberInStock > 0) {
        totalCost += this.contents[i].price;
        purchase.push(this.contents[i]);
      }
    }
    for (let i = 0; i<purchase.length; i++) {
      console.log(purchase[i].title, purchase[i].numberInStock);
      let tempObs = this._http.purchaseOneBook(purchase[i]._id);
      tempObs.subscribe((data:any)=>{
        if (i === 0) {
          this.confirmation = "Congratulations! You've purchased ";
        }
        if (i > 0 && purchase.length > (i+1)) {
          this.confirmation += ", "  + purchase[i].title;
        } else if (i > 0 && purchase.length === i + 1) {
          this.confirmation += " and "  + purchase[i].title;
        } else {
          this.confirmation += purchase[i].title;
        }
        if (i === purchase.length - 1) {
          this.confirmation += " for $" + totalCost.toFixed(2) + ".  ";
          this.confirmation += "Come shop again!"
          this.clearItems();
        }
      });
    }
  }
}
