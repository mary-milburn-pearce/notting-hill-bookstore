import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient){
  }
  getBooks(){
    return this._http.get('/books');
  }
  getBook(id){
    let url = '/books/' + id;
    return this._http.get(url);
  }
  postToServer(newBook){
    return this._http.post('/books', newBook);  
  }
  // putToServer(id, editPet){
  //   let url = '/pets-api/' + id;
  //   console.log(`Putting to url: ${url}`, editPet);
  //   return this._http.put(url, editPet);
  // }
  // deleteFromServer(id){
  //   return this._http.delete('/pets-api/' + id);  
  // }
}