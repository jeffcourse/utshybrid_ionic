import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { CategoryModel } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  checkLogin (user_name:string, user_password:string):Observable<any>
  {
    let body = new HttpParams();
    body = body.set('user_name', user_name);
    body = body.set('user_password', user_password);
  	return this.http.post("https://ubaya.fun/hybrid/160420097/login.php", body);
  }

  constructor(private http:HttpClient) { }
}
