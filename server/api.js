const api = module.exports = require('express').Router()
const products = require('./products');
const reviews = require('./reviews');
const user = require('./user');
const recipe = require('./recipe');
const comments = require('./comments')
const uploader = require('./uploader')
// import products from './products';
api
  .get('/express-test', (req, res) => res.send({express: 'working!'})) //demo route to prove api is working
  .use('/products', products)
  .use('/reviews', reviews)
  .use('/user', user)
  .use('/recipe', recipe)
  .use('/comments', comments)
  .use('/uploader', uploader)
// No routes matched? 404.
api.use((req, res) => res.status(404).end())
