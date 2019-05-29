import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books = [];

  constructor(private _httpService: HttpService, private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {

  }
  findBook(id: string){
    let tempObs = this._httpService.getOneBook(id);
    tempObs.subscribe((data:any)=>{
      console.log("Component: show Page", data)
      this.books = data;
    })
  }


}
