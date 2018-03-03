const db = require('../db') //this is required
const Recipe = require('../db/models/recipe');
const Ingredient = require('../db/models/ingredients');
const Users = require('../db/models/users');
const Comments = require('../db/models/comments');

const router = require('express').Router()


//add a recipe to the DB
router.post('/submit', function(req, res, next) {
  console.log('comment backend!', req.body.comment, req.body.recipeid, req.body.userid);
  Comments.sync().then(function(){
    Comments.create({
      comment: req.body.comment.comment,
      cooktime: req.body.comment.cooktime,
      user_id: req.body.userid,
      recipe_id: req.body.recipeid

    }).then(result => {
        res.status(200).send(result);
    })
    .catch(next);
  });

});


//add recipe ingredients to DB
router.post('/ingredient', function(req, res, next) {
  Ingredient.sync().then(function(){
    Ingredient.create({
      quantity: req.body.ingredient.quantity,
      measure: req.body.ingredient.measure,
      item: req.body.ingredient.item,
      prep: req.body.ingredient.prep,
      recipe_id: req.body.id
    }).then(
      function(result){
        res.status(200).send(result);
      }
    ).catch(next);
  });
});

//find comments by recipe
router.post('/findbyrecipe', function(req, res, next) {
  Comments.sync().then(function(){
    Comments.findAll({
      include: [Users],
      order: [
        ['id', 'DESC']
      ],
      where: {
        recipe_id: req.body.id
      }
    })
    .then(
      function(result){
        console.log(result);
        res.status(200).send(result);
      }
    ).catch(next);
  });
});

//findAll recpies for display to the main page
router.post('/findall', function(req, res, next) {
  console.log('findall backend fired!');
  Recipe.sync().then(function(){
    Recipe.findAll({
      include: [Users],
      order: [
        ['id', 'DESC']
      ]
    })
    .then(
      function(result){
        res.status(200).send(result);
      }
    ).catch(next);
  });
});




module.exports = router;
