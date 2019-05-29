import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newProduct = {title: "", price: 0.00, image: ""};
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }
// addProduct(){
//   let obs = this._httpService.postProduct(this.newProduct);
//   obs.subscribe((data: any)=>{
//     if(!data.error){
//       console.log("Component: add product success", data);
//       this._router.navigate(["/products"]);
//     }
//     else{
//       console.log("Component: create error", data.error)
//     }
//   })
// }
  

}
