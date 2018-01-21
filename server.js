const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  let date_time = 'jan,19,2018,22:00:00'
  console.log(req.ip);
  fs.appendFile('connections.txt', req.ip +'\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.render('index', {date: date_time});
})

app.post('/', function (req, res) {
  let date_time = 'jan,19,2018,22:00:00'
  fs.appendFile('reset_request.txt', req.ip +""+ req.body.name +""+ req.body.reset_request_date_time+'\n', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.render('index', {date: date_time});
})

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})

