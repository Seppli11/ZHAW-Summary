# Express

## Post and Get Requests

The following code extracts get requests

```js
app.post('/shoes', function (req, res, next) {
    // GET /shoes?order=desc&shoe[color]=blue&shoe[type]=converse
    console.dir(req.query.order)
    // => 'desc'
    console.dir(req.query.shoe.color)
    // => 'blue'
    console.dir(req.params.name)
}
         
app.post('/user/:name', function (req, res, next) {
    // GET /user/tj
    console.dir(req.params.name)
    // => 'tj'
})
```

The following code extracts post requests:

```js
var express = require('express')
var app = express()
// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
app.post('/profile', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
})
```

## Cookies

Designed as a stateless protocol to store data on the browser. It can be set with the `Set-Cookie` header and can be read from JS (except if `HttpOnly` is set) with `document.cookie`. The client will send the cookie back with the `Cookie` Header.

![image-20221124091916910](res/image-20221124091916910.png)

## Sessions

Sessions can be realised with cookies, but sessions can be hijacked when the session id can be stolen (e.g. when using http)

![image-20221124092110126](res/image-20221124092110126.png)

```js
// "npm install express-session" to install the express-session package
var express = require('express')
var cookieParser = require('cookie-parser')
var session = require('express-session')

var app = express();

app.use(cookieParser())
app.use(session({secret: "Shh, its a secret!"}))

app.get('/', function(req, res){
    if(req.session.page_views){
        req.session.page_views++
        res.send("You visited this page " + req.session.page_views + " times")
    } else {
        req.session.page_views = 1
        res.send("Welcome to this page for the first time!")
    }
})

app.listen(3000)
```

