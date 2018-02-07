const db = require('../db') //this is required
const Users = require('../db/models/users');
const bcrypt = require('bcrypt') ;

const router = require('express').Router()

router.post('/login', function(req, res, next) {
  console.log('login backend fired!', req.body.userlogin);

});

//user registration and password hashing
router.post('/register', function(req, res, next) {
  console.log('user register router fired', req.body);
  console.log(req.body.userreg.firstname);
  bcrypt.hash(req.body.userreg.password, 10, function(err, hash) {
    Users.sync().then(function(){
      Users.create({
        firstname: req.body.userreg.firstname,
        lastname: req.body.userreg.lastname,
        username: req.body.userreg.username,
        password: hash
      }).then(result => {
          res.status(200).send(result);
      })
      .catch(next);
    });
});


});

module.exports = router;
