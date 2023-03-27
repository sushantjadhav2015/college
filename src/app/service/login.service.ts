import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

jsonUrl="http://localhost:3000/users/"

  constructor(private http: HttpClient) { }

create(data:any){
  return this.http.post(this.jsonUrl,data)
}
getUsers(){
  return this.http.get(this.jsonUrl)
}

}
