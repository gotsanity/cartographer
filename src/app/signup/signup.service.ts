import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

import { ContactDetails } from './models/contact-details';

@Injectable()
export class SignupService {
  // add authorization header with jwt token
  headers = new Headers({ 'X-Access-Token': environment.api_token});
  options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getAllContacts(): Observable<ContactDetails[]> {
    return this.http.get('/api/contacts', this.options)
      .map(res => res.json());
  }

  getContact(id: string): Observable<ContactDetails> {
    return this.http.get('/api/contacts/' + id, this.options)
      .map(res => res.json());
  }

  addContact(contact: ContactDetails): Observable<ContactDetails> {
    console.log('inside addcontact', contact);
    return this.http.post('/api/contacts/add/', contact, this.options)
      .map(res => res.json());
  }

  updateContact(contact: ContactDetails): Observable<ContactDetails> {
    return this.http.put('/api/contacts/' + contact._id, contact, this.options)
      .map(res => res.json());
  }

  deleteContact(contact: ContactDetails): Observable<ContactDetails> {
    return this.http.delete('/api/contacts/' + contact._id, this.options)
      .map(res => res.json());
  }
}
