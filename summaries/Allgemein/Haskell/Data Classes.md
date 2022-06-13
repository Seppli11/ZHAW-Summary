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

`fmap` and `(<$)` are the same function but with diffrent argument ordering. They will map from `f a` to `f b`. `<$>` is a synonym of `fmap` but as a infix operator.

### Laws

A `Functor` should follow the following laws:

* `fmap id = id`
  Using the `id` function with `fmap` should return the unmodifies object
* `fmap (f . g) == fmap f . fmap g`
  It shouldn't matter if the mapping functions are composed together first and then mapped or the `fmap` are composed

## Applicative

```haskell
class Applicative f where
	{-# MINIMAL pure, ((<*>) | lift2A) #-}
	pure :: a -> f a
	(<*>) :: f (a -> b) -> f a -> f b
	lift2A :: (a -> b -> c) -> f a -> f b -> f c
```

`Applicative`s are like `Functor` in that they apply a mapping function to a box value. With a `Applicative` the function is also a boxed value. This is useful to map functions with more than one argument to a boxed value. If `<$>` (aka `fmap`) is used to apply a value to a function with two parameters, you get the following: `(+) <$> Just 5 == Just (+5)`. This can be combined with `<*>` in the following way:

```haskell
(+) <$> Just 5 <*> Just 3 -- will return Just 8
lift2A (+) (Just 5) (Just 3) -- will return Just 8
```

An `Applicative` also defines the function `pure` which boxes a value. 

There are also some helper functions:

* `(*>) :: f a -> f b -> f b`
  Discard the first argument (but still "runs" it) and only return the value of the second applicative

  ```haskell
  Just 3 *> Just 5 -- will return Just 5
  Nothing *> Just 5 -- will return Nothing
  Just 3 *> Nothing -- will return Nothing
  ```

* `<* :: fa -> fb -> fa`
  Discards the second argument (but still "runs" it) and only return the value of the first applicative

  ```haskell
  Just 3 <* Just 5 -- will return Just 3
  Nothing <* Just 5 -- will return Nothing
  Just 3 <* Nothing -- will return Nothing
  ```

* `liftA3 :: Applicative f => (a -> b -> c -> d) -> f a -> f b -> f c -> f d` 
  Works the same as `liftA2` but accepts a function with three paramters.

## Monad

```haskell
class Applicative m => Monad m where
	(>>=) :: forall a b. m a -> (a -> m b) -> m b
	(>>) :: forall a b. m a -> m b -> m b 
	return :: a -> m a
```

A `Monad` is similar to an `Applicative` in that it also allows a boxed value to be mapped. The difference is, that the mapping function of a `Monad` returns a boxed value as a `Monad` itself. This can be used to return for example a `Nothing` instance, if the operation failed, leading to short-circuiting.

The `>>=` operator gets used to chain Monads together. The mapping function gets the boxed value of the input `Monad` as a parameter. But this isn't always wanted (like with `putStrLn` which returns `IO ()`). In those cases `>>` can be used. `return` is often a synonym to `pure` of `Applicative`

```haskell
half :: Int -> Maybe Int
half x = if even x 
			then Just (x `div` 2)
			else Nothing

Just 3 >>= half -- will return Nothing
Just 4 >>= half -- will return Just 2
Just 4 >>= half >>= half -- will return Just 1
Just 4 >>= half >>= half >>= half -- will return Nothing

putStrLn "hello" >>= (\_ -> putStrLn "world")
putStrLn "hello" >> putStrLn "world"
-- both print:
-- hello
-- world
```

## Monad Transformer

```haskell
class (forall m. Monad m => Monad (t m)) => MonadTrans t where
	lift :: Monad m => m a -> t m a
```

A monad transformer enhances a "base monad" `m` with some functionality. For example the `ExceptT` type enhances a monad with the `Either` monad allowing it to short-circuit in case of an error.

The `lift` method can be used to access the base monad.

```haskell
addIfPositive :: Int -> ExceptT String (State Int) Int
addIfPositive i = do
  n <- lift get
  if n >= 0
    then lift (put $ n + 1) >> lift get
    else throwE $ (show n) ++ " is negative"
```

In the example above `addIfPositive` will only add the given `Int` to the internal state if the internal state is positive else an error message is produced and the operation stops (aka. short-circuits). `lift get` is used to access the state in the do-Block.

Monads are usually defined with their monad transformer. The `Except` monad for example is defined as `type Except e a = ExceptT e (Identity a)`

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

The `sequenceA` function takes a `Foldable`, which has `Applicative`s nested (like `[Just 1, Just 2, Nothing]`). `traverse` on the other hand takes a `Foldable` of elements and a mapping function, which will map the elements to `Applicative` resulting in a `Foldable` which has `Applicative` nested. 

Example: `[1, 2, 3]` with the mapping function `Just` will result in `[Just 1, Just 2, Just 3]` which would be an valid input for `sequenceA`.

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
