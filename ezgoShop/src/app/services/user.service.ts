import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user_api = "http://localhost:3000/users";
  isLogin = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  
  getUser() :Observable<User[]>{

    return this.http.get<User[]>(this.user_api);

  }

}
