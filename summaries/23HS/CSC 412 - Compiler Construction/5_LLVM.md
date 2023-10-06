# LLVM

## LLVM IR

It is similar to assembly, but at a higher abstractions.

* There are unlimited register (e.g. `%2`, `%3`, ...)
* LLVM IR has a fully type system for describing data



### Types

There are various different types:

* Integers: `i8`, ...
* Floats: 
* Vectors
* Structs
* Pointers

### Examples #1



* `align x`: the address has to be a multiple of `x`
* As a *convention*: `%id` are usually used for types and registers, `@id` are used for global variables

### Example #2

* there is no explicit stack. LLVM will take care of this when generating the code

### Example #3 - Pointers

```c
int *ptr;
ptr = ptr + 1;
```

```llvm
%ptr = alloca i32*
%1 = load i32** %ptr
%2 = getelementptr i32* %1, i64 1
store i32* %2, i32** %ptr
```

* To do any pointer arithmentic, one has to use the `getelementptr` instruction
* `load i32**` needs two `*`, since it loads the value of the pointer.