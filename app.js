const express = require('express');
const app = express();
const PORT = 3334;
const knex = require('./knex');


app.get('/', (req, res) => {
  knex('authors').select('*')
  .then( (bookWriters) => {
    console.log(bookWriters);
    res.end('alrighty then')
  })
});


app.listen(PORT, () => {
  console.log('neat');
})


module.exports = app;
