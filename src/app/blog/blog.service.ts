import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { BlogPost } from './models/blog'

@Injectable()
export class BlogService {
  // add authorization header with jwt token
  headers = new Headers({ 'X-Access-Token': environment.api_token});
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllPosts(): Observable<BlogPost[]> {
    return this.http.get('/api/posts', this.options)
      .map(res => res.json());
  }

  getRecentPosts(num: number): Observable<BlogPost[]> {
    return this.http.get('/api/posts/recent/' + num, this.options)
      .map(res => res.json());
  }

	getSinglePost(id: String) {
    return this.http.get('/api/posts/single/' + id, this.options)
      .map(res => res.json());
  }

  createPost(post: BlogPost): Observable<BlogPost> {
  	return this.http.post('/api/posts/add/', post, this.options)
      .map(res => res.json());
  }

  updatePost(post: BlogPost): Observable<BlogPost> {
    return this.http.post('/api/posts/update/' + post._id, post, this.options)
      .map(res => res.json());
  }

  deletePost(post: BlogPost): Observable<BlogPost> {
    return this.http.post('/api/posts/delete/' + post._id, {}, this.options)
      .map(res => res.json());
  }

}