import { Router, Request, Response, NextFunction } from 'express';
import fetch from 'node-fetch';

const DATA_SOURCE = 'https://api.github.com/users/silverorange/repos';

export const repos = Router();

interface Repo {
  id: string;
  fork: boolean;
}

repos.get('/', async (_: Request, res: Response, next: NextFunction) => {
  try {
    const response = await fetch(DATA_SOURCE);
    const allRepos: Repo[] = await response.json();
    const onlyForks = allRepos.filter((repo) => !repo.fork);

    res.header('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify(onlyForks));
  } catch (e) {
    next(e);
  }
});
