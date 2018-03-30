import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';



@Component({
  selector: 'app-blog-recent',
  templateUrl: './blog-recent.component.html',
  styleUrls: ['./blog-recent.component.css']
})
export class BlogRecentComponent implements OnInit {
  isLoading: boolean = false;
  blogPosts: Observable<BlogPost[]>;
  @Input() numPosts: number;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    if (!this.numPosts) {
      this.numPosts = 3;
    }
    
    this.getRecentPosts();
  }

  getRecentPosts() {
    this.isLoading = true;
    this.blogPosts = this.blogService.getRecentPosts(this.numPosts)
                      .finally(() => this.isLoading = false);
  }
}
