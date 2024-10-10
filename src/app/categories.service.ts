import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  categoryList():Observable<any> {
    return this.http.get("https://ubaya.fun/hybrid/160420097/category.php");
  }

  constructor(private http:HttpClient) { }
}
