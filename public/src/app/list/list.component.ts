import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  [x: string]: any;
  books = [];
  searchTerm: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.showPage()
  }

  showPage(){
    let tempObs = this._httpService.getAllBooks();
    tempObs.subscribe((data:any)=>{
      console.log("Component: show Page", data)
      this.books = data;
    })
  }

  deleteProduct(id:string){
    let observable = this._httpService.deleteBook(id);
    observable.subscribe(data=>{
      console.log("Component: delete products,", data)
      this.showPage();
    })
  }

}
