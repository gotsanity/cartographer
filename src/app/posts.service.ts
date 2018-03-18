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

	getSinglePost(id: String) {
  	console.log('Getting a post with id: ' + id);
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
  	console.log('Delete post not implemented yet');
  }

}