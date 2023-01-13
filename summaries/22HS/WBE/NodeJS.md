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

## Jasmine

```js
/* PlayerSpec.js - Auszug */
describe("when song has been paused", function() {
	beforeEach(function() {
		player.play(song)
		player.pause()
    })

    it("should indicate that the song is currently paused", function() {
    	expect(player.isPlaying).toBeFalsy()

    	/* demonstrates use of 'not' with a custom matcher */
    	expect(player).not.toBePlaying (song)
    })

    it("should be possible to resume", function() {
    	player.resume()
    	expect(player.isPlaying).toBeTruthy()
    	expect(player.currentlyPlayingSong) .toEqual (song)
    })
})
```

More examples:

```js
//matchers
expect([1, 2, 3]).toEqual([1, 2, 3])
expect(12).toBeTruthy()
expect("").toBeFalsy()
expect("Hello planet").not.toContain("world")
expect(null).toBeNull()
expect(8).toBeGreaterThan(5)
expect(12.34).toBeCloseTo(12.3, 1)
expect("horse_ebooks.jpg").toMatch(/\w+.(jpg|gif|png|svg)/i)

// spies
spyOn(dictionary, "hello")
expect(dictionary.hello).toHaveBeenCalled()
// or...
spyOn(dictionary, "hello").and.returnValue("bonjour")
spyOn(dictionary, "hello").and.callFake(fakeHello)
```



## File-API

The file API contains a submodule `promise` which contains the same methods but they return a promise. To import the promise variants, use `const fs = require("fs").promises`.

### Manipulate Paths

```js
const path = require('path')
const notes = '/users/bkrt/notes.txt'

path.dirname(notes) 						// /users/bkrt
path.basename(notes)						// notes.txt
path.extname(notes)							// .txt
path.basename(notes, path.extname(notes))	// notes
```

### Read Files

```js
const fs = require('fs')

fs.open('test.txt', 'r', (err, fd) => {
	// fd is our file descriptor
})

fs.stat('test.txt', (err, stats) => {
    if (err) {
    	console.error(err)
    	return
    }
    
    stats.isFile() 			/* true */
    stats.isDirectory() 	/* false */
    stats.isSymbolicLink() 	/* false */
    stats.size 				/* 1024000 = ca 1MB */
})
```

### Write Files

```js
const fs = require('fs')
const content = 'Node was here!'
fs.writeFile('/Users/bkrt/test.txt', content, (err) => {
    if (err) {
        console.error(`Failed to write file: ${err}`)
        return
    }
    /* file written successfully */
})
```

