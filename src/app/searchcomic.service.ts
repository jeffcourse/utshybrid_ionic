import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { SearchcomicModel } from './searchcomic.model';

@Injectable({
  providedIn: 'root'
})
export class SearchcomicService {

  searchComic(txtsearch:string):Observable<any>{
    let body = new HttpParams();
    body = body.set('search',txtsearch);
    return this.http.post("https://ubaya.fun/hybrid/160420097/searchcomic.php",body);
  }

  constructor(private http:HttpClient) { }
}
