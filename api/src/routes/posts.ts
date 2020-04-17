import { Router, Request, Response } from 'express';
import { posts as postsData } from '../data/posts';
import shuffle from 'knuth-shuffle-seeded';

export const posts = Router();

posts.get('/', async (_: Request, res: Response) => {
  shuffle(postsData);

  res.header('Content-Type', 'application/json');
  res.header('Cache-Control', 'no-store');

  res.status(200);
  res.send(JSON.stringify(postsData));
});
