const express = require('express')
const app = express()

var config = require(__dirname + './../config/' + process.env.ENV + '.js');


app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/test', function (req, res) {
  res.send(200, {success: true});
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
