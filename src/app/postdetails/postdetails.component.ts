import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostDetailsComponent implements OnInit {
	post: any = [];
	id: String = "5aaefe74e800e72e1a16e43e";

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  	this.postsService.getSinglePost(this.id).subscribe(post => {
  		console.log(post);
  		this.post = post;
  	});
  }

}
