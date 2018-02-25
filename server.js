var port = process.env.PORT || 3000;
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    var json = JSON.parse(fs.readFileSync('Resets.json', 'utf8'));
    let date_time = json[0].datetime;

    console.log(req.ip);
    fs.appendFile('connections.txt', req.ip +'\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.render('index', {date: date_time});
})

app.post('/', function (req, res) {
    var json = JSON.parse(fs.readFileSync('Resets.json', 'utf8'));
    let date_time = json[0].datetime;
    console.log(req.ip +" "+ req.body.name +" "+ req.body.reset_request_date_time);
    fs.appendFile('reset_request.txt', req.ip +" "+ req.body.name +" "+ req.body.reset_request_date_time+'\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    res.redirect('/');
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!')
})

