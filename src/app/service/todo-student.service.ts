import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoStudentService {
  apiUrl = "http://localhost:3000/students/";

  constructor(private httpclient: HttpClient) {}

  // create data
  create(data: any): Observable<any> {
    return this.httpclient.post(this.apiUrl, data);
  }

  // get data from server
  getFromServer(): Observable<any> {
    return this.httpclient.get(this.apiUrl);
  }

  edit(id, data) {
    return this.httpclient.put(this.apiUrl + id, data);
  }

  // delete data
  delete(id: any) {
    return this.httpclient.delete(this.apiUrl + id);
  }

  // // fetch data
  // fetchData(id: number) {
  //   return this.httpclient.get(this.apiUrl + id);
  // }
}
