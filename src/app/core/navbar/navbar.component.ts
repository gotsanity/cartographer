import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'app/core/auth/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: String;
  
  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }

}
