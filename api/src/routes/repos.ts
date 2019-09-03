import express from 'express';

export const repos = express.Router();

repos.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.status(200);
  res.send('[]');
});
