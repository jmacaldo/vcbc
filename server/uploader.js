const db = require('../db') //this is required
const Product = require('../db/models/product');
const Review = require('../db/models/review');

const router = require('express').Router()

router.post('/image', function(req, res, next) {
  console.log('backend fired');
  console.log(req.params.file);
});

router.get('/:id', function(req, res, next) {
    Product.findOne({
            where:{id:req.params.id},
            include: [Review]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
