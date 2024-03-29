var express = require('express');
var router = express.Router();
const Sequelize = require("sequelize");
const {models} = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

router.get('/quizzes', function(req, res, next) {
  models.quiz.findAll()
  .then(quizzes => {
    res.render('quizzes', { title: 'Quizzes' });
  })
  .catch(error => next(error));
});


module.exports = router;
