import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  baseUrl = "http://localhost:3000/brand/";

  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
