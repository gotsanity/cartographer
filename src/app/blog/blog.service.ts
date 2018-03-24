import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { BlogPost } from './models/blog'

@Injectable()
export class BlogService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts(): Observable<BlogPost[]> {
  	console.log('Getting all BlogPosts');
    return this.http.get('/api/posts')
      .map(res => res.json());
  }

	getSinglePost(id: String) {
		console.log(id);
    return this.http.get('/api/posts/single/' + id)
      .map(res => res.json());
  }

  createPost() {
  	console.log('Create post not implemented yet');
  }

  updatePost(id: String) {
  	console.log('Update post not implemented yet');
  }

  deletePost(id: String) {
    return this.http.post('/api/posts/delete/' + id, {})
      .map(res => res.json());
  }

}