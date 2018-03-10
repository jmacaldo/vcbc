const db = require('../db') //this is required
const Product = require('../db/models/product');
const Review = require('../db/models/review');

const router = require('express').Router()



router.post('/', function(req, res, next) {
    res.redirect('http://cors-anywhere.herokuapp.com/'+req.body.query)
});

module.exports = router
