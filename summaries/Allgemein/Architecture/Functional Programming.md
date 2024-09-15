# Functional Programming

## Parse, don't validate

*source: https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/*

The basic premise of this pattern to parse the input of a system once when it enters the system into a data structure, rather than validating it over and over again. Put differently, when parsing, the information that the input is valid is stored in the data structure, while with validating, the original data structure isn't changed. Rather, the program checks that the data is valid. But this gained information isn't stored in the type system, effectively throwing it away. However, for this to work, the data structure must be as restrictive as possible. 

### Pushing Responsibility up and down the Call-Chain

*source: https://www.parsonsmatt.org/2017/10/11/type_safety_back_and_forth.html*

One can also think of pushing parsing up and down the information chain. When we think of a function which returns the head of a list. The most simple type signature (`head :: [a] -> a`) is not total, meaning if we pass an empty list to this head, it will fail with an runtime error. To make this more safe, we can change the signature to `head :: [a] -> Maybe a`. This second version passes the responsibility of dealing with the case of the empty list down stream to the callee. However, we can also push this responsibility up stream by accepting more restrictive parameter types. For example, the signature can be changed as following: `head :: NonEmptyList a -> a`. Now the caller is required to first check if the list is non-empty (or the caller already gets a non-empty list). 

Pushed to the extreme, this leads to "Parse, don't validate"-pattern, since we parse the input into a data structure, which disallows any invariants.

### Fake Parser

Sometimes the type system doesn't allow us to encode certain restrictions. For example an integer which cannot be zero. We can fake our way there by creating a new type which wraps an int and only allows constructing if the int is non-zero. Therefore, if get such a `NonZeroInt`, we know it cannot be zero since there is no way to construct such instance:

```haskell
newtype NonZeroInt = NonZeroInt Int

parseInt :: Int -> Maybe NonZeroInt
```

