const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res) => {
  knex('authors').select('*')
  .then( (bookWriters) => {
    res.render('../views/allAuthors', {bookWriters:bookWriters})
    res.send('cool beans')
  })
});
router.get('/:id', (req, res) => {
  knex('authors').where({id:req.params.id}).select('*')
  .then( (writer) => res.render('../views/justAuthor', {writer:writer}))
})
module.exports = router;
