export class Post {
	constructor(
		public _id: String,
		public title: String,
		public author: String,
		public email: String,
		public created_on: Date,
		public body: String,
		public updated_on?: Date,
		public tags?: String[],
	) {}
}
