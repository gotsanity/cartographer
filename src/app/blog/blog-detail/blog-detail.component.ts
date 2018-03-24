import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnChanges {

  @Input() id: String = '';
  blogForm: FormGroup;
  @Input() blogPost: BlogPost;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.createForm();
  }

  createForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.blogService.getSinglePost(this.id).subscribe(post => {
      this.blogPost = new BlogPost(post);
      console.log(this.blogPost);

      this.blogForm.patchValue({
        title: this.blogPost.title,
        body: this.blogPost.body,
        tags: this.blogPost.tags
      });
    });
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.blogForm.reset({
      title: this.blogPost.title,
      body: this.blogPost.body
    });
  }

}
