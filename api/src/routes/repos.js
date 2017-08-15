const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

router.get(
  '/',
  (req, res) => {
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.send('[]');
  }
);

module.exports = router;
