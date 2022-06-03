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

### Dual Monoid

The `Dual a` monoid will flip the order of the `mappend` (aka `<>`) operator. For this to work, `a` has to be a `Monoid` as well.

```haskell
Dual "hello" <> Dual " " <> Dual "world" -- will return Dual "world hello"
getDual (Dual "hello" <> Dual " " <> Dual "world") -- will return "world hello"
Dual [4..6] <> Dual [1..3] -- will return Dual [1, 2, 3, 4, 5, 6]
```

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

```haskell
class Foldable t where
    {-# MINIMAL foldMap | foldr #-}

    foldMap :: Monoid m => (a -> m) -> t a -> m
    foldMap f = foldr (mappend . f) mempty

    foldr :: (a -> b -> b) -> b -> t a -> b
    foldr f z t = appEndo (foldMap (Endo #. f) t) z

    -- and a number of optional methods

```

A `Foldable` is a container type which allows to access its elements in a well-defined order. To instance a `Foldable` either `foldMap` or `foldr` has to be defined, but there are more optional methods.

Here are some of the useful methods, which can be used with a `Foldable` structure:

* `foldMap :: (Foldable t, Monoid m) => (a -> m) -> t a -> m`
  With `foldMap` a `Foldable` structure can be folded. For this, the type contained in the `Foldable` needs to be an instance of `Monoid`

  ```haskell
  foldMap Product [1..4] -- will return 24
  foldMap Sum [1..4] -- will return 10
  
  ```

  

* `length :: Foldable t => t a -> Int`
  Returns the length of a foldable structure

* `toList :: Foldable t => t a -> [a]`
  Will flatten the `Foldable` to a list

* `traverse_ :: (Foldable t, Applicative f) => (a -> f b) -> t a -> f ()` / `for_ :: (Foldable t, Applicative f) => t a -> (a -> f b) -> f ()`
  Allows to execute an `Applicative` for every element. This could be a side-effect. Both `traverse_` and `for_` do the same thing, but have their arguments flipped

  ```haskell
  traverse_ (putStrLn . show) [1..3]
  for_ [1..3] (putStrLn . show)
  -- both will print:
  -- 1
  -- 2
  -- 3
  ```

* `sequenceA_ :: (Foldable t, Applicative f) => t (f a) -> f ()`
  `sequenceA_` will execute each `Applicative` in the `Foldable` and throw the result away

  ```haskell
  sequenceA_ [putStrLn "hello", putStrLn "world"]
  -- will print:
  -- hello
  -- world
  ```

* `null :: Foldable t => t a -> Bool`
  `null` checks if the given `Foldable` is empty

  ```haskell
  null [] -- will return True
  null [1..4] -- will return False
  ```

## Traversable

```haskell
class (Functor t, Foldable t) => Traversable t where
    {-# MINIMAL traverse | sequenceA #-}
    
    traverse :: Applicative f => (a -> f b) -> t a -> f (t b)
    traverse f = sequenceA . fmap f
    
    sequenceA :: Applicative f => t (f a) -> f (t a)
    sequenceA = traverse id
    
    mapM :: Monad m => (a -> m b) -> t a -> m (t b)
    mapM = traverse
    
    sequence :: Monad m => t (m a) -> m (t a)
    sequence = sequenceA
```

An instance of a `Traversable` alows a data structure to work easily with `Applicative`s and `Monad`s

Here are some useful methods, which can be used with a `Traversable` structure:

* `traverse :: (Traversable t, Applicative f) => (a -> f b) -> t a -> f (t b)` 
  `traverse` will apply the given function to every element of the `Traversale` structure and execute the returned `Applicative`. The results are returned wrapped in the `Applicative`

  ```haskell
  traverse print [1, 2] -- has the type :: IO [()]
  -- will print:
  -- 1
  -- 2
  -- and will return IO [(), ()]
  traverse Sum [1, 2] -- will return Sum [1, 2]
  ```

* `sequenceA :: (Traversable t, Applicative f) => t (f a) -> f (t a)`
  `sequenceA` executes all `Applicative`s in a `Traversable` structure and wraps them in the `Applicative`

  ```haskell
  sequenceA [print "hello", print "world"] -- has the type :: IO [()]
  -- will print:
  -- hello
  -- world
  -- and will return IO [(), ()]
  sequenceA [Sum 1, Sum 5] -- will return Sum [1, 5]
  sequenceA [(+3),(*2),(+6)] :: Num a => a -> [a]
  sequenceA [(+3),(*2),(+6)] 2 -- will return [5, 4, 8] 
  ```

* `mapM :: Monad m => (a -> m b) -> t a -> m (t b)`
  An alias for `traverse` which exists because `Applicative` wasn't always a super class of `Monad`

* `sequence :: Monad m => t (m a) -> m (t a)`

  An alias for `sequenceA` which exists because `Applicative` wasn't always a super class of `Monad`
