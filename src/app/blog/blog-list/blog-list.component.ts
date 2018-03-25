import { Component, OnInit, Input, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})

export class BlogListComponent implements OnInit {
  blogPosts: Observable<BlogPost[]>;
  isLoading = false;
  selectedBlogPost: BlogPost;
  newBlogPost: BlogPost;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.isLoading = true;
    this.blogPosts = this.blogService.getAllPosts()
                          .finally(() => this.isLoading = false);
    this.selectedBlogPost = undefined;
    this.newBlogPost = undefined;
  }

  select(blogPost: BlogPost) {
    this.selectedBlogPost = blogPost;
    this.newBlogPost = undefined;
  }

  newPost() { 
    this.newBlogPost = new BlogPost();
    this.selectedBlogPost = undefined;
  }

  onDeletePost(post: BlogPost) {
    console.log('Deleting from list the post @id', post._id);
    this.getBlogPosts();

  }

  onEditPost(post: BlogPost) {
    console.log('Editing post in list @id', post._id);
    this.selectedBlogPost = post;
  }

}
