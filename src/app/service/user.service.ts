import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiResponse2 } from './api.response2';
import {ApiResponse} from "../service/api.response";

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) {
       this.http = http;
}

  saveUser(user:any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>("http://localhost:8086/registration", user, httpOptions);
  }

loginUser(user:any): Observable<any>{
const headers = new HttpHeaders({ 'Access-Control-Request-Headers': "Content-Type", 'Content-Type': 'application/json'});
return  this.http.post("http://localhost:8086/login", user , {headers: headers});
}

getAllUsers(token:any): Observable<any>{
const headers = new HttpHeaders({'Authorization': 'Bearer' +token});
return  this.http.get("http://localhost:8086/users",  {headers: headers});
}

getUser(token:any): Observable<any>{
const headers = new HttpHeaders({'Authorization': 'Bearer' +token});
return  this.http.get("http://localhost:8086/getuser",  {headers: headers});
}
}
