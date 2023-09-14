# Properties of Programming Languages

While there are categories (e.g. functional programming, object-oriented programming, imperative programming), languages tend to add different features from different categories. Therefore it makes more sense to assign different properties (i.e. has lambdas, or has classes) to different languages.

A language can be described at a high level with the following properties:

* purpose
* prominent features
  * objeccts, classes, functions, regexes, ....
  * memory management
* syntax 
  The UI of a programming language, like the grammar, key words, ...
* type system
* any notable *semantic* features, outside of the type system
* implementation (native code compiler, vm, jit, ...)
* adaptation
* tooling, platform (OS and hardware) support (if notable)

A program which runs in the back ground and cleans the heap memory of unused objects. 

The heap is split into multiple "sub-heaps" or called generation. Over time, objects are moved to older generations.

The gc doesn't completly eliminate memory leak (e.g. non-weak reference listeners).

A minor gc happens once the young generation is full. A major gc happens once the old generation is full and will operate on the whole heap.

a gc helps to programmer since the programmer doesn't have to "care" about memory managemente. but it also abstracts it 

## Does Java has static or dynamic type checking?

Jave has mostly static type checking. 

Pros of staticly typed language: 

* errors can be cought earlier
* code can be optimized for a specific type
* it can take longer to compile

## Describe the JIT compiler

JIT runs at run-time and compiles byte code into machine code. Since JIT has access to run time information, it can do optimisations at run time that couldn't be done ahead of time.

## What is Parametic Polymorphism?

A method with argument of multiple type is parametic polymoriphic. Basically, every method which has a generic type variable.

```java
<T> int size(List<T> x) {...} // this is parametic polymorphic
int size(List x) {...} // this is not
```

## Uniformity of Languages

Languages which don't have uniform properties (like python), it makes the language less fit for larger projects. This comes from the fact, that weird oddities arise which are a nightmare to debug in large code bases.

## Expression Types

* Infix-Expression: `4 + x`
* Prefix-Expression: `+ 4 x`
* Postfix-Expression: `5 x +`

## Literal Types

1. Pass a value as an argument (`hi(0.5)`)
2. Assign a value to a variable (`x = 0.5`)
3. Having a literal representation (`0.5`)
4. create a new value dynamically

Not all types in every language pass all of this questions. In a lot of language, functions don't pass all of the questions.
