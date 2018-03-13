const db = require('../db') //this is required
const Recipe = require('../db/models/recipe');
const Ingredient = require('../db/models/ingredients');
const Users = require('../db/models/users');
const Comments = require('../db/models/comments');
const LocalFaves = require('../db/models/localFaves');
const Recipes = require('../db/models/recipe');

const router = require('express').Router()


//add a local recipe as a favorite
router.post('/', function(req, res, next) {
  LocalFaves.sync().then(function(){
    LocalFaves.create({
      user_id: req.body.user,
      recipe_id: req.body.recipe
    }).then(result => {
        res.status(200).send(result);
    })
    .catch(next);
  });
});

//add an api recipe as a favorite
router.post('/api', function(req, res, next) {
  Favorite.sync().then(function(){
    Favorite.create({
      user_id: req.body.user,
      apiID: req.body.recipe

    }).then(result => {
        res.status(200).send(result);
    })
    .catch(next);
  });
});

//check whether local recipe is a favorite
router.post('/isLocalFave', function(req, res, next) {
  LocalFaves.sync().then(function(){
    LocalFaves.findOne({
      where: {
        user_id: req.body.user,
        recipe_id: req.body.recipe
      }
    }).then(result => {
        res.status(200).send(result);
    })
    .catch(next);
  });
});

//load all favorite local recipes in the users profile page
router.post('/loadfaves', function(req, res, next) {
  console.log('load user local faves fired!', req.body.id);
  LocalFaves.sync().then(function(){
    LocalFaves.findAll({
      include: [Users, Recipe],
      where: {
        user_id: req.body.id,
      }
    }).then(result => {
      console.log(result);
        res.status(200).send(result);
    })
    .catch(next);
  });
});



module.exports = router;
