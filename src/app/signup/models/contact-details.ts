export class ContactDetails {
  _id = '';
  name = '';
  email = '';
  categories? = [];

  constructor(contact: any = {
    _id: '',
    name: '',
    email: '',
    categories: []
  }) {
    this._id = contact._id;
    this.name = contact.name;
    this.email = contact.email;
    this.categories = contact.categories;
  }
}
