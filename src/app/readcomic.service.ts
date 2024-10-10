import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ReadcomicModel } from './readcomic.model';

@Injectable({
  providedIn: 'root'
})
export class ReadcomicService {

  readComic(idx:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('idx',idx);
    return this.http.post("https://ubaya.fun/hybrid/160420097/readcomic.php",body);
  }

  getRating(idx:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('id',idx);
    return this.http.post("https://ubaya.fun/hybrid/160420097/getrating.php",body);
  }

  inputRating(idx:number,user_id:number,newrating:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('id_komik',idx);
    body = body.set('user_id',user_id);
    body = body.set('rating',newrating);
    return this.http.post("https://ubaya.fun/hybrid/160420097/newrating.php",body);
  }

  addFavorite(idx:number,user_id:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('id_komik',idx);
    body = body.set('user_id',user_id);
    return this.http.post("https://ubaya.fun/hybrid/160420097/myfavorite.php",body);
  }

  removeFav(idx:number,user_id:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('id_komik',idx);
    body = body.set('user_id',user_id);
    return this.http.post("https://ubaya.fun/hybrid/160420097/removefav.php",body);
  }

  inputComment(idx:number,user_id:number,comment:string):Observable<any>{
    let body = new HttpParams();
    body = body.set('id_komik',idx);
    body = body.set('user_id',user_id);
    body = body.set('komentar',comment);
    return this.http.post("https://ubaya.fun/hybrid/160420097/newcomment.php",body);
  }

  getComment(idx:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('id',idx);
    return this.http.post("https://ubaya.fun/hybrid/160420097/getcomment.php",body);
  }

  getCommentNum(idx:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('id',idx);
    return this.http.post("https://ubaya.fun/hybrid/160420097/getJmlComment.php",body);
  }
  constructor(private http:HttpClient) { }

}
