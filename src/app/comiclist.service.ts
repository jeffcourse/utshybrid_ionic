import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ComiclistModel } from './comiclist.model';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComiclistService {

  comicList(id:number):Observable<any> {
    let body = new HttpParams();
    body = body.set('id',id)
    return this.http.post("https://ubaya.fun/hybrid/160420097/comiclist.php",body);
  }

  constructor(private http:HttpClient) { }
}
