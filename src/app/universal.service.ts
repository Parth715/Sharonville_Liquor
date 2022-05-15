import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UniversalService {

  baseurl = "http://localhost:9876/api"
  //baseurl = "http://sharonvi.w29.wh-2.com/B/api"
  constructor(private httpmeth: HttpClient) { }
  loggedinuser!: User
  User(username: string, password: string): Observable<User>{
    return this.httpmeth.get(`${this.baseurl}/users/${username}/${password}`) as Observable<User>
  }
}
