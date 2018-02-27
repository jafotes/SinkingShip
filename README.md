# sinkingship

### Setup

- Install node.js
- Clone this repo
- Move inside the repo folder
- Create a Resets.json file
```json
[
        {
                "datetime": "feb,22,2018,09:00:00"
        },
        {
                "datetime": "jan,22,2018,10:00:00"
        },
        {
                "datetime": "jan,9,2018,09:00:00"
        }
]

```
- Create a Countdown.json file
```json
[
    {
        "datetime": "mar,16,2018,18:00:00"
    }
]
```
- run "npm install"
- run "node server"
- Access the webapp through http:/localhost/

### Known Issues

- Navigation Bar is not suitable for mobile devices

### TODO

- Add leaderboard (use Resets.json to compute time intervals)
- Create countdown table instead of only one (use Countdown.json)
