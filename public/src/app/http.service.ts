import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllBooks(){
    console.log("Service: get all books");
    return this._http.get("/api/books");
  }

  getOneBook(id:string){
    console.log("Service: get one book", id);
    return this._http.get("/api/books/"+id);
  }

  postBook(bookObj){
    console.log("Service: post book", bookObj);
    return this._http.post("/api/add", bookObj);
  }

  editBook(id:string, editBook:object){
console.log("Service: edit book", editBook);
    return this._http.put("/api/edit/"+id, editBook);
  }

  deleteBook(id:string){
    console.log("Service: delete book", id);
    return this._http.delete("/api/delete/"+id);
  }
}
