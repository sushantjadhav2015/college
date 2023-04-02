import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TodoStudentService {
  apiUrl = "http://localhost:3000/students";

  constructor(private httpclient: HttpClient) {}

  // create data
  create(data: any): Observable<any> {
    return this.httpclient.post(this.apiUrl, data);
  }

  // get data from server
  getFromServer(): Observable<any> {
    return this.httpclient.get(this.apiUrl);
  }

  // this code is used to get data in the form and allow to edit it
  edit(data: any): Observable<any> {
    const newUrl = `${this.apiUrl}/${data}`;
    return this.httpclient.get(newUrl, data);
  }

  // this method is used to transfer the updated data in server
  // data.id is used because get idea to put data for that id
  update(data: any): Observable<any> {
    const neweditUrl = `${this.apiUrl}/${data}`;
    return this.httpclient.patch(neweditUrl, data);
  }

  // delete data
  delete(id: any) {
    const newUrl = `${this.apiUrl}/${id}`;
    return this.httpclient.delete(newUrl, id);
  }

}
