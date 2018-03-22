import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostDetailsComponent implements OnInit {
	post: any = [];
	id: String = "";

  constructor(private postsService: PostsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit() {
  	this.postsService.getSinglePost(this.id).subscribe(post => {
  		console.log(post);
  		this.post = post;
  	});
  }

}
