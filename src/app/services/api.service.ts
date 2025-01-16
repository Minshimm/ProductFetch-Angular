import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
 
  getProductDetailsAPI(){
    return this.http.get('https://dummyjson.com/products')
  }
}
