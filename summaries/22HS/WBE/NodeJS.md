# NodeJS

## `EventEmitter`

```js
const EventEmitter = require('events')
const door = new EventEmitter()
door.on('open', (speed) => {
	console.log(`Door was opened, speed: ${speed || 'unknown'}`)
})
door.emit('open')
door.emit('open', 'slow')
```

The `emit(...)` method calls all listeners synchronously. In the event listener `this` is bound to the `EventEmitter` instance.

If a listener should be executed asynchronously then the method body needs to be wrapped in a `setImmediate(fun)` call.

```js
myEmitter.on('event', (a, b) => {
    setImmediate(() => {
    	console.log('this happens asynchronously')
    })
})
```

