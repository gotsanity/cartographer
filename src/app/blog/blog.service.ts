import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

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

  createPost(post: BlogPost): Observable<BlogPost> {
  	return this.http.post('/api/posts/add/', post)
      .map(res => res.json());
  }

  updatePost(post: BlogPost): Observable<BlogPost> {
  	console.log(post);
    return this.http.post('/api/posts/update/' + post._id, post)
      .map(res => res.json());
  }

  deletePost(id: String) {
    return this.http.post('/api/posts/delete/' + id, {})
      .map(res => res.json());
  }

}