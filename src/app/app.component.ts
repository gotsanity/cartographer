import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Shoelaces.js';
  copyright = {
    name: 'Jesse Harlan',
    address: 'http://developmentderby.com/profile/jesse.harlan',
    year: '2018'
  };
}
