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

## Garbage Collector

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

Not all types in every language pass all of this questions. In a lot of language, functions don't pass all of the questions. A value which passes those questions, is called a first-class value/type.

## Eagerness and Laziness

An eager programming language evaluates the arguments before calling a function. So when evaluating `f(x, 1 + y)`, `x` and `1 + y` is evaluated before calling `f`.

An lazy language on the other hand, `x` and `1 + y` will only be called once their value is actually needed.

## Call-By-`*`

* Call-by-value
  A parameter is copied when calling the function. In this case all parameters are eagerly evaluated and then passed in

* Call-by-ref

* Call-by-name
  Call-by-name just passes the name of a variable in. When the function actually needs the value of the parameter, it is evaluated. This is one way to implement laziness. However, code like

  ```python
  def f(n, m):
      m = n + 1
      p = m * n
  ```

  In this example above, with call-by-name, `n` is evaluated twice! This behaviour can be simulated by passing in a function as a parameter.

*  Call-by-need
  This is semantically the same to call-by-name, but the result of an expression is cached. It is what Haskell calls a thunk.
