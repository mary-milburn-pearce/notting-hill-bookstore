import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class HttpService {
  constructor(private _http: HttpClient){
  }
  getProducts(){
    return this._http.get('/products-api');
  }
  getProduct(id){
    let url = '/products-api/' + id;
    return this._http.get(url);
  }
  // postToServer(newPet){
  //   return this._http.post('/pets-api', newPet);  
  // }
  // putToServer(id, editPet){
  //   let url = '/pets-api/' + id;
  //   console.log(`Putting to url: ${url}`, editPet);
  //   return this._http.put(url, editPet);
  // }
  // deleteFromServer(id){
  //   return this._http.delete('/pets-api/' + id);  
  // }
}