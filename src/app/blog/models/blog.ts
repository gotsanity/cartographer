export class BlogPost {
  _id = '';
  title = '';
  author: Author;
  body = '';
  spoiler_image?: Image;
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
      spoiler_image: '',
      created_on: '',
      updated_on: '',
      tags: []
    })
  {
    this._id = post._id;
    this.title = post.title;
    this.author = new Author(post.author);
    this.body = post.body;
    this.spoiler_image = new Image(post.spoiler_image);
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

export class Image {
  url: String = '';
  alt: String = '';
  caption: String = '';
  constructor(image: any = {url: '', alt: '', caption: ''}) {
    this.url = image.url;
    this.alt = image.alt;
    this.caption = image.caption;
  }
}