const express = require('express');
const app = express();
const PORT = 3334;
const knex = require('./knex');
const path = require('path');
const bodyParser = require('body-parser');
app.set('views', path.resolve(__dirname,"views"))

// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  knex('authors').select('*')
  .then( (bookWriters) => {
    res.render('../views/allAuthors', {bookWriters:bookWriters})
  })
});


app.listen(PORT, () => {
  console.log('neat');
})


module.exports = app;
