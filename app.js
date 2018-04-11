const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const authorRoute = require('./routes/authors')
const serveStatic = require('serve-static');

app.use(serveStatic(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname,"views"))

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/authors', authorRoute);

app.listen(3334, () => console.log('lissening'))
