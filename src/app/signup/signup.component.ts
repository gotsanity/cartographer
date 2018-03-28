import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SignupService } from './signup.service';

import { Observable } from 'rxjs/Observable';

import { ContactDetails } from './models/contact-details';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  modalRef: BsModalRef;
  currentSignups: Observable<ContactDetails[]>;
  buttonText = "NOTIFY ME ON LAUNCH";
  isSignedUp = false;

  constructor(private modalService: BsModalService, private signupService: SignupService) { }

  ngOnInit() {
    this.currentSignups = this.signupService.getAllContacts();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  signup() {
    console.log(this);
  }

  onContactSubmit() {
    this.modalRef.hide();
    this.buttonText = "We'll Contact You Soon!";
    this.isSignedUp = true;
  }
}
