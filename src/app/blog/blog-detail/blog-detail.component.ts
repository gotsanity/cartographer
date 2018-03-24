import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author, BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnChanges {

  @Input() id: String;
  blogForm: FormGroup;
  @Input() blogPost: BlogPost;
  @Input() isEditing: boolean = false;

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.createForm();
  }

  createForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      // tags: this.fb.array([]),
    });
  }

  ngOnInit() {
    if (this.id) {
      this.blogService.getSinglePost(this.id).subscribe(post => {
        this.blogPost = new BlogPost(post);
        console.log(this.blogPost);

        this.blogForm.patchValue({
          title: this.blogPost.title,
          body: this.blogPost.body,
          // tags: this.blogPost.tags
        });
      });
    } else {
      this.blogPost = new BlogPost();
    }
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

  createPost() {
    console.log('triggered a create');
    this.blogPost = this.prepareSavePost();
    this.blogService.createPost(this.blogPost).subscribe(post => {
      console.log(post);
      this.blogPost = new BlogPost(post);
    });
    this.rebuildForm();
    this.isEditing = false;
  }

  onSubmit() {
    console.log('triggered');
    this.blogPost = this.prepareSavePost();
    this.blogService.updatePost(this.blogPost).subscribe(post => {
      this.blogPost = new BlogPost(post);
    });
    this.rebuildForm();
    this.isEditing = false;
  }

  prepareSavePost(): BlogPost {
    const formModel = this.blogForm.value;

    this.blogPost.author = {
      name: 'Gotsanity',
      contact: 'facebook'
    };

    const savePost: BlogPost = {
      _id: this.id as string,
      title: formModel.title as string,
      body: formModel.body as string,
      author: this.blogPost.author as Author,
    }

    return savePost;
  }

  revert() { this.rebuildForm(); }

}
