import { Component, OnInit, Input } from '@angular/core';
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
  blogPosts;
  isLoading = false;
  selectedBlogPost: BlogPost;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogPosts();
  }

  getBlogPosts() {
    this.isLoading = true;
    this.blogPosts = this.blogPosts.getAllPosts()
                          .finally(() => this.isLoading = false);
    this.selectedBlogPost = undefined;
  }

  select(blogPost: BlogPost) { this.selectedBlogPost = blogPost; }

}
