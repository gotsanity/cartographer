import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Development Derby';
  copyright = {
    name: 'Jesse Harlan',
    address: '/contact',
    year: '2018'
  };
}
