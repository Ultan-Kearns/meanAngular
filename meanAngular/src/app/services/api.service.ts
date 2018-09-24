import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  posts:any = [];
  constructor(private http: HttpClient) {
    this.getHttp();
    this.showHttp();
   }

   getHttp(): Observable<any>
   {
    return this.http.get("https://jsonblob.com/api/2635398d-bfdd-11e8-922a-f1ac97d0c05c");
   }
   showHttp()
   {
    this.getHttp().subscribe((data) =>{
      this.posts = data.posts;
    });
   }
}
