import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'app/core/core.module';
import { BlogService } from './blog.service';
import { BlogPost } from './models/blog';
import { BlogRecentComponent } from './blog-recent/blog-recent.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BlogRoutingModule,
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
    BlogService,
  ]
})
export class BlogModule { }
