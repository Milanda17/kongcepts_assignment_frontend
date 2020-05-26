import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EncrDecrService} from '../_services/encr-decr.service';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private EncrDecr: EncrDecrService) { }

  login(credentials): Observable<any> {

    var password = credentials.password;
    var encrypedPassword = this.EncrDecr.set('123456$#@$^@1ERF', password); 

    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: encrypedPassword
      
    }, httpOptions);
  }

  register(user): Observable<any> {

    var password = user.password;
    var encrypedPassword = this.EncrDecr.set('123456$#@$^@1ERF', password); 

    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      password: encrypedPassword
    }, httpOptions);
  }
}