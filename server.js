'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.listen(port,() =>{
  console.log(`servidor is running ${port}`);
});