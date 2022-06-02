# Data Classes

## Semi-Group

```haskell
class Semigroup a where
	(<>) :: a -> a -> a
```

A semigroup is a data type which has a associative binary operation (like `+`). The operation of a semigroup should be associative (`(a <> b) <> c == a <> (b <> c)`).

Every `Monoid` is a semigroup.

## Monoid

>Haskall defines a monoid in the following way:
>
>```haskell
>class Semigroup a => Monoid a where
>	mempty :: a
>	mappend :: a -> a -> a
>	mconcat :: [a] -> a
>```
>
>`<> :: a -> a -> a` is an alias for `mappend`

A monoid is a thing which has two rules:

1. It has an identity value
   In algebra for `+` the identity value is `0`, for multiplication it is `1`
   $$
   0 + a = a\\
   1 \cdot a = a
   $$

2. It is associative
   $$
   (a+b)+c=a+(b+c)\\
   (a\cdot b)\cdot c=a\cdot (b\cdot c)
   $$

Here are some examples for monoids:

* List/String: `[a]`

  ```haskell
  [] ++ [1, 2, 3] == [1, 2, 3]
  ([1, 2] ++ [3, 4]) ++ [5, 6] = [1, 2] ++ ([3, 4] ++ [5, 6])
  ```

* Maybe: `Semigroup a => Maybe a`

  ```haskell
  Just (Sum 3) `mappend` Nothing == Just (Sum 3)
  mempty :: Maybe (Sum Int) == Nothing
  ```

* Numbers: `Num a => Sum a` / `Num a => Product a`

  ```haskell
  Sum 3 `mappend` Sum 4 == 7
  mempty :: Sum Int = 0
  Product 3 `mappend` Sum 2 == 6
  mempty :: Product Int = 0
  ```

* IO

* All/Any: 

  ```haskell
  -- implements &&
  mempty :: All == Any True
  All True <> All False == All False
  All True <> All True == All True
  -- implement ||
  mempty :: Any == Any False
  Any True <> Any False == Any True
  Any False <> Any False == Any False
  ```

### Use Case

## Functor

A `Functor` is a data type which can be mapped over.

```haskell
class Functor f where
    fmap :: (a -> b) -> f a -> f b
    (<$) :: a -> f b -> f a
```

`fmap` and `(<$)` are the same function but with diffrent argument ordering. They will map from `f a` to `f b`.

### Laws

A `Functor` should follow the following laws:

* `fmap id = id`
  Using the `id` function with `fmap` should return the unmodifies object
* `fmap (f . g) == fmap f . fmap g`
  It shouldn't matter if the mapping functions are composed together first and then mapped or the `fmap` are composed

## Applicative

## Monad

## Foldable



## Traversable

