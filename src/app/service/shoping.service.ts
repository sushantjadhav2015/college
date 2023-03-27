import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ShopingService {
// shopingUrl="http://localhost:3000/shopping/"
shopingUrl="https://fakestoreapi.com/products/"

  constructor(private http:HttpClient) { }

  getProduct(){
   return this.http.get<any>(this.shopingUrl);
  }
}
