import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ContactDetails } from './models/contact-details';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  getAllContacts(): Observable<ContactDetails[]> {
    return this.http.get('/api/contacts')
      .map(res => res.json());
  }

  getContact(id: string): Observable<ContactDetails> {
    return this.http.get('/api/contacts/' + id)
      .map(res => res.json());
  }

  addContact(contact: ContactDetails): Observable<ContactDetails> {
    console.log('inside addcontact', contact);
    return this.http.post('/api/contacts/add/', contact)
      .map(res => res.json());
  }

  updateContact(contact: ContactDetails): Observable<ContactDetails> {
    return this.http.put('/api/contacts/' + contact._id, contact)
      .map(res => res.json());
  }

  deleteContact(contact: ContactDetails): Observable<ContactDetails> {
    return this.http.delete('/api/contacts/' + contact._id)
      .map(res => res.json());
  }
}
