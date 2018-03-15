const db = require('../db') //this is required
const Users = require('../db/models/users');
const bcrypt = require('bcrypt') ;

const router = require('express').Router()


//passport js login and hashed password compare
router.post('/login', function(req, res, next) {
  Users.findOne({
    where: {
      username: req.body.userlogin.username
    }
  })
  .then(function(rows) {
    bcrypt.compare(req.body.userlogin.password, rows.password, function(err, result) {
      	if(err) return err;


        if (result===false){
          console.log('wrong password');
          res.status(401).send(rows);
        } else {
          console.log('correct password');
          res.status(200).send(rows);

        }



  	});
  })
  .catch(next);
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
        img: req.body.img,
        password: hash
      }).then(result => {
          res.status(200).send(result);
      })
      .catch(next);
    });
  });
});

//find user by username
router.post('/findByUsername', function(req, res, next) {
  Users.findOne({
    where: {
      username: req.body.username
    }
  }).then(result => {
    res.status(200).send(result);
  })

});

module.exports = router;
