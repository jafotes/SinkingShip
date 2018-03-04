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
    let date_time1 = json[0].datetime;
    let date_time2 = json[1].datetime;

    res.render('countdown', { date1: date_time1, date2: date_time2 });
})

/* app.post('/countdown', function (req, res) {
    var json = JSON.parse(fs.readFileSync('Countdown.json', 'utf8'));
    let date_time = json[0].datetime;

    res.redirect('/countdown');
}) */

app.get('/leaderboard', function (req, res) {
    var json = JSON.parse(fs.readFileSync('Resets.json', 'utf8'));
    var alldates = [];
    var alldates_formated = [];
    var len = Object.keys(json).length;

    for (var i = 1; i < len; i++) {
        var date1 = new Date(json[i - 1].datetime);
        var date2 = new Date(json[i].datetime);
        var datedelta = date1 - date2;
        alldates.push(datedelta)
    }

    alldates.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c - d;
    });

    for (var i = alldates.length - 1; i >= 0; i--) {
        days = Math.floor(alldates[i] / (60 * 60 * 1000 * 24) * 1);
        hours = Math.floor((alldates[i] % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
        formated_days = ("0" + days).slice(-2);
        formated_hours = ("0" + hours).slice(-2);
        alldates_formated.push([formated_days, formated_hours]);
    }

    res.render('leaderboard', { alldates: alldates_formated });
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

