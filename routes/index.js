const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET second page. */
router.get('/second', function(req, res, next) {
  res.render('second', { title: 'Second page' });
});

/* GET third page. */
router.get('/third', function(req, res, next) {
  res.render('third', { title: 'Third page' });
});

/* GET fourht page. */
router.get('/fourht', function(req, res, next) {
  res.render('fourht', { title: 'fourht page' });
});

module.exports = router;
