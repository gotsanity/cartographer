import { Component, OnInit, Input, Output, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Author, BlogPost, Image } from '../models/blog';
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
  @Input() spoilerImage: Image;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditPost: EventEmitter<any> = new EventEmitter<any>();
  @Output() onCreatePost: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private blogService: BlogService) {
    this.createForm();
  }

  createForm() {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      spoiler_image: this.fb.group({
        url: '',
        alt: '',
        caption: ''
      }),
    });
  }

  ngOnInit() {
    if (this.id) {
      this.blogService.getSinglePost(this.id).subscribe(post => {
        this.blogPost = new BlogPost(post);
        this.spoilerImage = new Image(post.spoiler_image);

        this.blogForm.patchValue({
          title: this.blogPost.title,
          body: this.blogPost.body,
          spoiler_image: this.blogPost.spoiler_image
        });
      });
    } else {
      this.blogPost = new BlogPost();
      this.spoilerImage = new Image();
    }
    console.log(this.blogPost);
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  ngOnDestroy() {
  }

  rebuildForm() {
    this.blogForm.reset({
      title: this.blogPost.title,
      body: this.blogPost.body,
      spoiler_image: this.blogPost.spoiler_image
    });
  }

  createPost() {
    this.blogPost = this.prepareSavePost();
    this.blogService.createPost(this.blogPost).subscribe(post => {
      this.id = post._id;
      this.blogPost = new BlogPost(post);
    });
    this.rebuildForm();
    this.isEditing = false;
    this.onCreatePost.emit(this.blogPost);
  }

  onSubmit() {
    this.blogPost = this.prepareSavePost();
    this.blogService.updatePost(this.blogPost).subscribe(post => {
      this.blogPost = new BlogPost(post);
    });
    this.rebuildForm();
    this.isEditing = false;
  }

  prepareSavePost(): BlogPost {
    const formModel = this.blogForm.value;

    // TODO: hook these two into the user and file storage subsystems
    this.blogPost.author = {
      name: 'Gotsanity',
      contact: 'facebook'
    };

    // this.blogPost.spoiler_image = this.spoilerImage;

    const savePost: BlogPost = {
      _id: this.id as string,
      title: formModel.title as string,
      body: formModel.body as string,
      author: this.blogPost.author as Author,
      spoiler_image: formModel.spoiler_image as Image,
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
    this.blogService.deletePost(this.blogPost).subscribe(post => {
      this.onDeletePost.emit(this.blogPost);
    });
  }

  editPost() {
    this.isEditing = true;
    this.onEditPost.emit(this.blogPost);
  }
}
