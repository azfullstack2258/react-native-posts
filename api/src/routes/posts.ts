import { Router, Request, Response } from 'express';
import { posts as postsData } from '../data/posts';

export const posts = Router();

posts.get('/', async (_: Request, res: Response) => {
  res.header('Content-Type', 'application/json');
  res.status(200);
  res.send(JSON.stringify(postsData));
});
