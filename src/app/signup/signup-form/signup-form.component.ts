import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ContactDetails } from '../models/contact-details';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  @Output() onContactSubmit: EventEmitter<any> = new EventEmitter<any>();
  model: ContactDetails = new ContactDetails();

  constructor(private signupService: SignupService,
    private modalService: BsModalService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.signupService.addContact(this.model).subscribe(contact => {
      this.model = new ContactDetails(contact);
      this.onContactSubmit.emit();
    });
  }

}
