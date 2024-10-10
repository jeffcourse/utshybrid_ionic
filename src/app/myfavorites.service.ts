import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ComiclistModel } from './comiclist.model';

@Injectable({
  providedIn: 'root'
})
export class MyfavoritesService {

  getFavorites(user_id:number):Observable<any>{
    let body = new HttpParams();
    body = body.set('id',user_id);
    return this.http.post("https://ubaya.fun/hybrid/160420097/detailfavorite.php",body);
  }

  constructor(private http:HttpClient) { }
}
