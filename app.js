const express = require('express');
const app = express();
const PORT = 3334;
const knex = require('./knex');
const ejs = require('ejs');
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  knex('authors').select('*')
  .then( (bookWriters) => {
    console.log(bookWriters[0].id)
    res.json(bookWriters[0].id)
  })
});


app.listen(PORT, () => {
  console.log('neat');
})


module.exports = app;
