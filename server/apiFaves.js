const db = require('../db') //this is required
const Recipe = require('../db/models/recipe');
const Ingredient = require('../db/models/ingredients');
const Users = require('../db/models/users');
const Comments = require('../db/models/comments');
const ApiFaves = require('../db/models/apiFaves');

const router = require('express').Router()


//add an api recipe as a favorite
router.post('/', function(req, res, next) {
  console.log('api fave backend!', req.body.user, req.body.recipe, req.body.label, req.body.image);
  ApiFaves.sync().then(function(){
    ApiFaves.create({
      user_id: req.body.user,
      apiID: req.body.recipe,
      label: req.body.label,
      image: req.body.image
    }).then(result => {
        res.status(200).send(result);
    })
    .catch(next);
  });
});


//check whether local recipe is a favorite
router.post('/isApiFave', function(req, res, next) {
  console.log('is local fave fired!', req.body.user, req.body.recipe);
  ApiFaves.sync().then(function(){
    ApiFaves.findOne({
      where: {
        user_id: req.body.user,
        apiID: req.body.recipe
      }
    }).then(result => {
      console.log('if api fave backend');
      console.log(result);
        res.status(200).send(result);
    })
    .catch(next);
  });
});

//load all favorite api recipes in the users profile page
router.post('/loadfaves', function(req, res, next) {
  console.log('load user local faves fired!', req.body.id);
  ApiFaves.sync().then(function(){
    ApiFaves.findAll({
      include: [Users],
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
