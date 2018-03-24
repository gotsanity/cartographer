import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author, BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() id: String = '';
  blogForm: FormGroup;
  blogPost: BlogPost;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.createForm();
  }

  createForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.blogService.getSinglePost(this.id).subscribe(post => {
      this.blogPost = new BlogPost(post);
      console.log(this.blogPost);

      this.blogForm.patchValue({
        title: this.blogPost.title,
        body: this.blogPost.body
      });
    });
  }

}
