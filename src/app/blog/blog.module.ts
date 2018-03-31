import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogService } from './blog.service';
import { BlogPost } from './models/blog';
import { BlogRecentComponent } from './blog-recent/blog-recent.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BlogRecentComponent,
    BlogListComponent,
    BlogDetailComponent
  ],
  declarations: [
    BlogRecentComponent,
    BlogListComponent,
    BlogDetailComponent,
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule { }