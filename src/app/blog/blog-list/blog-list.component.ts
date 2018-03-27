import { Component, OnInit, Input, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

import { BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';
import { AuthenticationService, UserDetails } from '../../auth/authentication.service';

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

  constructor(private blogService: BlogService, private auth: AuthenticationService) { }

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
    let newBlog = new BlogPost();
    newBlog.author.name = this.auth.getUserDetails().display_name;
    newBlog.author.contact = this.auth.getUserDetails().email;
    this.newBlogPost = new BlogPost(newBlog);
    this.selectedBlogPost = undefined;
  }

  onDeletePost(post: BlogPost) {
    this.getBlogPosts();

  }

  onEditPost(post: BlogPost) {
    this.selectedBlogPost = post;
  }

  onCreatePost(post: BlogPost) {
    this.getBlogPosts();
  }

}
