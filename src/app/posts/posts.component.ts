import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	posts: any = [];

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  	// Retrieve posts from the api
  	this.postsService.getAllPosts().subscribe(posts => {
  		this.posts = posts;
  	});
  }

  deletePost(id: String) {
    this.postsService.deletePost(id: String).subscribe(post => {
      console.log(post);
      let index = this.posts.findIndex(p => p._id === id);
      this.posts.splice(index, 1);
    });
  }

  viewPost(id: String) {
    this.router.navigate(['/posts/' + id]);
  }

}
