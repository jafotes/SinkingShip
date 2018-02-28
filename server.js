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

    res.render('index', { date: date_time });
})

/* app.post('/', function (req, res) {
    var json = JSON.parse(fs.readFileSync('Resets.json', 'utf8'));
    let date_time = json[0].datetime;

    res.redirect('/');
}) */


app.get('/countdown', function (req, res) {
    var json = JSON.parse(fs.readFileSync('Countdown.json', 'utf8'));
    let date_time = json[0].datetime;

    res.render('countdown', { date: date_time });
})

/* app.post('/countdown', function (req, res) {
    var json = JSON.parse(fs.readFileSync('Countdown.json', 'utf8'));
    let date_time = json[0].datetime;

    res.redirect('/countdown');
}) */

app.get('/leaderboard', function (req, res) {
    res.render('leaderboard', {});
})

/* app.post('/leaderboard', function (req, res) {
    res.redirect('/leaderboard');
})
 */

app.get('/about', function (req, res) {
    res.render('about', {});
})

/* app.post('/about', function (req, res) {
    res.redirect('/about');
}) */

app.listen(port, function () {
    console.log('Sinkingship listening on port ' + port + '!')
})

