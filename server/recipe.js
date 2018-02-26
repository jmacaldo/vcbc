const db = require('../db') //this is required
const Recipe = require('../db/models/recipe');
const Ingredient = require('../db/models/ingredients');
const Users = require('../db/models/users');

const router = require('express').Router()


//add a recipe to the DB
router.post('/submit', function(req, res, next) {
  console.log('recipe submit backend fired!', req.body.recipe.yield);
  Recipe.sync().then(function(){
    Recipe.create({
      title: req.body.recipe.title,
      tags: req.body.recipe.tags,
      description: req.body.recipe.description,
      source: req.body.recipe.source,
      yield: req.body.recipe.yield,
      cooktime: req.body.recipe.cooktime,
      img: req.body.img,
      user_id: req.body.id

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

//find ingredients by recipe
router.post('/findbyid', function(req, res, next) {
  Ingredient.sync().then(function(){
    Ingredient.findAll({
      where: {
        recipe_id: req.body.id
      }
    })
    .then(
      function(result){
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
