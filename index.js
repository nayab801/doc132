
const express = require('express');


const app = express();

const port = 3070;

app.get('/', (req, res) => {
  res.send("App works!!!!!");
});
