import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts() {
  	console.log('Getting all posts');
    return this.http.get('/api/posts')
      .map(res => res.json());
  }
}