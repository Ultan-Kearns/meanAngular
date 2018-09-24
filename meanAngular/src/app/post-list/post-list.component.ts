import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'; 
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit{
  posts:any = [];
  ngOnInit()
  {
   this.retrieveData.getHttp().subscribe(data =>
   {
    this.posts = this.retrieveData.posts;
   })
  }
  constructor(private retrieveData:ApiService)
  {
    
  }

}
