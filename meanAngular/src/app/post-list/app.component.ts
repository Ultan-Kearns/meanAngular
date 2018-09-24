import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {;
  title = 'meanAngular';
  constructor(private http: HttpClient) {
    this.getHttp();
    this.showHttp();
   }

   getHttp()
   {
    return this.http.get("https://www.jsonblob.com/57f0e767-bfed-11e8-922a-0fd0e34d0a2d");
   }
   showHttp()
   {
    this.getHttp().subscribe((data) =>{
      return this.getHttp();
    });
   }
}
