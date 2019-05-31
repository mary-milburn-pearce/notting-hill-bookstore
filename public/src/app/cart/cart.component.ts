import { Component, OnInit } from '@angular/core';
//import { HttpService } from '../http.service';
import { UpdateService } from '../update.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    { title: 'I love London',
      price: 20.99,
      numRemaining: 5 },
    { title: 'Have you been to Paris?',
      price: 15.99,
      numRemaining: 3 },
    { title: 'Do you know the way to San Jose?',
      price: 12.50,
      numRemaining: 1}
  ];
  updates = [];

  constructor(
    private update: UpdateService
  ) { }

  ngOnInit() {
    this.update.updates.subscribe(data => {
      this.processUpdate(data);
    })
  }

  processUpdate(data) {
    console.log('Processing updates:', data)
  }
}
