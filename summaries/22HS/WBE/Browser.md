# Browser

```html
<html>
    <head>
        <link rel="stylesheet" href="mystyle.css">
    </head>
    <body>
        <script type="module" src="code/date.js"></script> 
    </body>
</html>


```

## Ajax

The following code uses the old low-level ajax api. 

```javascript
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
    	xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')
    }
}
xhr.open('GET', 'https://yoursite.com')
xhr.send()
```

### Fetch

```js
// fetch options
const options = {
    "method": "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    "body": "hello world"
}

fetch(url, options).then(response => {
    // returns the status code
    console.log(response.status)
    // returns the received headers
    console.log(response.headers.get("Content-Type"))
    // returns a promise which resolve to the text
    response.json().then(json => console.log(json))
    // returns a promise which resolve to the text
    response.text().then(text => console.log(text))
}).catch(err => console.error(err))
```

## Local Storage and Session Storage

With `localStorage` and `sessionStorage`, data can be stored on the browser.

```javascript
let user = {name: "Hans", highscore: 234}
localStorage.setItem("user", JSON.stringify(user))
console.log(localStorage.getItem("user"))
```

## History

## Web Workers

With web workers, JavaScript can run code in a separate thread. However, the web worker has to communicate with the frontend code over events to avoid locking.

```js
// squareworker.js
addEventListener("message", event => {
	postMessage(event.data * event.data)
})
// main script
let squareWorker = new Worker("code/squareworker.js")
squareWorker.addEventListener("message", event => {
	console.log("The worker responded:", event.data)
})
squareWorker.postMessage(10)
squareWorker.postMessage(24)
```

