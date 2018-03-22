import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {
	submitted = false;
	model = new Post('Title of Post', 'GotSanity', 'gotsanity@gmail.com', 'This is the body of the post', Date.now(), Date.now());

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }


}
