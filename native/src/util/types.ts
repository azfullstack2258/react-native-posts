export interface Author {
  id: string;
  name: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  publishedAt: Date;
  author: Author;
}
