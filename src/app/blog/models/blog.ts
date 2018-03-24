export class BlogPost {
  _id = '';
  title = '';
  author: Author;
  body = '';
  created_on? = '';
  updated_on? = '';
  tags? = [];

  constructor(
    post: any = {
      _id: '',
      title: '',
      author: '',
      contact: '',
      body: '',
      created_on: '',
      updated_on: '',
      tags: []
    })
  {
    this._id = post._id;
    this.title = post.title;
    this.author = new Author({ name: post.author.name, contact: post.author.contact });
    this.body = post.body;
    this.created_on = post.created_on;
    this.updated_on = post.updated_on;
    this.tags = post.tags;    
  }
}

export class Author {
  name = '';
  contact = '';

  constructor(author: any) {
    this.name = author.name;
    this.contact = author.contact;
  }
}
