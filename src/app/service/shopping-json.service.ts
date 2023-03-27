import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ShoppingJSONService {
  jsonUrl = "http://localhost:3000/shopping/";

  private cartItems: any = [];
  private itemCount = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {}

  // post data in json server
  saveProducts(products: any): Observable<any> {
    return this.http.post<any>(this.jsonUrl, products);
  }

  getProduct(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  removeCartPro(id: any): Observable<any> {
    return this.http.delete(this.jsonUrl + id);
  }

  removeAll(id: any) {
    return this.http.delete(this.jsonUrl + id);
  }

  updateProduct(product:any): Observable<any> {
    const url = `${this.jsonUrl}/${product.id}`;
    const updatedProduct = {
      ...product,
      total: product.price * product.quantity
    };
    return this.http.put<any>(url, updatedProduct);
  }

//   updateQty(item:any): Observable<any>{
//     const url = `${this.jsonUrl}/${item.id}`;
//     const updatedQty = {
//       ...item,
//       quantity}
// return this.http.put<any>(url,updatedQty)
//   }
}
