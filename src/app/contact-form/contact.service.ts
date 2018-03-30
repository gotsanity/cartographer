import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ContactService {
  // add authorization header with jwt token
  headers = new Headers({ 'X-Access-Token': environment.api_token});
  options = new RequestOptions({ headers: this.headers });

  constructor() { }

}
