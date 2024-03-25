# Introduction

## What is functional programming?

The following is **not** functional programming:

```c
sum ( L ) {
    l = length ( L )
        i = 0
        acc = 0
        while ( i < l ) {
            acc = acc + L [ i ]
                i = i + 1
        }
    return acc
}
```

Imperative programming is when:

* it's based on states, transition and sequences
* imperative states 

Functional programming is:

* no states,
* close to the mathematical notation
* more declarative
* no mutable variables (at least in the conventional sense)

> Functional programming is a style of programming that emphasises the evaluation of expressions, rather than execution of commands. The expressions in these languages are formed by using functions to combine basic values.
> -Graham Hutton

Functional languages often have the following:

* First class functions ($\lambda$-terms, currying, partial application)
* Immutable data (and following from that: referential transparency, type safety)
* Highly developed type system (algebra data types, pattern matching, type inference)
* Recursion (and tail-call-optimisation)

An other way to define functional programming, is with a function programming style:

* Avoid side effects and mutable states
* composable functions
* prefer higher-order function and recursion

## Referential Transparency

Variables in functional programming languages, and by extension Haskell, have a fundamentally different semantic. Rather than meaning, that there is a value in the memory location where a variable is located, a variable in Haskell stays always the same. Because of this, assignments are time-independent.

As such, a statement like `x = x + 1` doesn't make sense, since `x` cannot be modified.

Another consequence of this, is that a function can't have side-effects (* except with `IO`). One big advantage of this, is that the result of a expression only depends on all arguments that occur in the expression. This aids readability. It also gives the compiler more flexibility when expressions are evaluated. This enables laziness.

## Type

There are multiple ways to define a type, but the following is one attempt:

> A type system is a tractable syntactic method of proving the absence of certain program behaviours by classifying phrases according to the kinds of values they compute.
> Benjamin Pierce, Types and Programming Languages

A type system is usually specified by specifying a set of primitive types (e.g. `Int`, `Bool`), a syntax element that allows the programmer to assemble new types from other types and a type checker that checks if the types are consistent.

### Algebraic Data Types

Haskell has algebraic data types.

Product types can be built from tuples (e.g. `(Int, String)`) or records:

```haskell 
data Customer = Customer 
    { customerId :: Int
	, name :: String
    }
```

Sum types are built in the following way:

```haskell
data Shape
	= Rectangle Float Float
	| Square Float
	| Circle Float
```

## Type Classes

## Partial Function

A partial function, oppose to a total function, is a function, where the not every input value is not defined. In Java, this is done with `null`  or exceptions. In Haskell, this is done with `data Maybe a = Just a | Nothing`

Another often used type is `data Either a b = Left a | Right b`. Usually is `Left a` the error case, and `Right b` the successful case. 
