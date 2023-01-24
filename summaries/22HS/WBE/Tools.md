 # Tools

## Falsy List

* `0`/ `-0`/`0n`
* empty strings 
* `null`|
* `undefined`
* `NaN`
* `document.all`

All other values are truthy.

## `typeof` Table

| Type             | Expression           | Result        |
| ---------------- | -------------------- | ------------- |
| Undefined        | `typeof undefined`   | `"undefined"` |
| Null (Object)    | `typeof null`        | `"object"`    |
| Boolean          | `typeof true`        | `"boolean"`   |
| Number           | `typeof 0`           | `"number"`    |
| BigInt           | `typeof  0n`         | `"bigint"`    |
| String           | `typeof "test"`      | `"string"`    |
| Symbol           | `typeof `            | `"symbol"`    |
| Function         | `typeof console.log` | `"function"`  |
| Any other object | `...`                | `"object"`    |

