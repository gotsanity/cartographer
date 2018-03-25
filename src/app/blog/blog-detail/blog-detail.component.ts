import { Component, OnInit, Input, Output, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author, BlogPost } from '../models/blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit, OnChanges, OnDestroy {

  @Input() id: String;
  blogForm: FormGroup;
  @Input() blogPost: BlogPost;
  @Input() isEditing: boolean = false;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditPost: EventEmitter<any> = new EventEmitter<any>();

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

  ngOnDestroy() {
    console.log('destroyed');
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
      this.id = post._id;
      this.blogPost = new BlogPost(post);
      console.log(this.blogPost);
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

  cancelEdit() {
    this.rebuildForm();
    this.isEditing = false;
    if (!this.id) {
      this.onDeletePost.emit(this.blogPost);
    }
  }

  deleteBlogPost() {
    console.log('Deleting post with id', this.id);
    this.blogService.deletePost(this.blogPost).subscribe(post => {
      this.onDeletePost.emit(this.blogPost);
    });
  }

  editPost() {
    console.log('Editing post with id', this.blogPost);
    this.isEditing = true;
    this.onEditPost.emit(this.blogPost);
  }
}
