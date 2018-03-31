import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-blog-single',
  templateUrl: './blog-single.component.html',
  styleUrls: ['./blog-single.component.css']
})
export class BlogSingleComponent implements OnInit {
  isLoading: boolean = false;
  blogPost: BlogPost;
  @Input() id: string;

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.blogPost = new BlogPost();
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getPost(this.id);
    });
  }

  getPost(id: string) {
    this.isLoading = true;
    this.blogService.getSinglePost(id).subscribe(post => {
      this.blogPost = new BlogPost(post);
      this.isLoading = false;
    });
  }

}
