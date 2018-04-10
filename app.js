const express = require('express');
const app = express();
const PORT = 3334;

app.get('/', (req, res) => {
  res.end('alrighty then')
});


app.listen(PORT, () => {
  console.log('neat');
})


module.exports = app;
