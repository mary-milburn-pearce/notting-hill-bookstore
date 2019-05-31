import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  constructor()  { }

   numItemsInCart() {
     let count = 0;
     let temp = [];
     if ("cart" in localStorage) {
       temp = JSON.parse(localStorage.getItem("cart"));
       count = temp.length;
     }
     return count;
   }

   addToCart(book) {
    let cartContents = [];
    if ("cart" in localStorage) {
      cartContents = JSON.parse(localStorage.getItem('cart'));
    }
    cartContents.push(book);
    localStorage.setItem("cart", JSON.stringify(cartContents));
  }

  cartTotalBill() {
    let total = 0;
    let temp = [];
    if ("cart" in localStorage) {
      temp = JSON.parse(localStorage.getItem("cart"));
      for (let i=0; i<temp.length; i++) {
        total += temp[i].price;
      }
    }
    return total;
  }

}

