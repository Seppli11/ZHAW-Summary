# Recursion

## What is recursion

The following is a basic recursive function:
$$
\begin{align}
f(0) &= c \\
f(n+1) &= G(f(n))
\end{align}
$$
This can also be views as an equation system, where the unknown term is $f$ ($f$ can be a function).

This is the equivalent haskell code:

```haskell
primRec :: (Integer -> Integer) -> Integer -> Integer -> Integer
primRec g c
	| n == 0 = c
	| otherwise = g $ rec_ (n-1)
	where
		rec_ = primRec g c
```

## $n+1$ or $n-1$

The following implements an exponential function:
$$
2^0 &= 1\\
2^{n} &= 2 \cdot 2^{(n - 1)}
$$


```haskell
exp2 0 = 1
exp2 n = 2 * exp2 (n-1)

{- this can also be defined with primRec from aboce -}
exp2' = primRec ((*) 2) 1
```

However, we can also implment this in a more mathematical way:
$$
2^0 &= 1\\
2^{(n+1)} &=2\cdot 2^n
$$


```haskell
data Nat 
	= Zero
	| Successor Nat
	deriving (Show, Eq)
	
expN :: Nat -> Nat
expN N = S N
expN (S n) = mulN (S (S N)) (expN n)
```

## Types of Recursions

### Primitive Recursion

$$
\begin{aligned}
f(0, \vec x) &= c(\vec x)\\
f(n+1, \vec x) &= G(f(n, \vec x), n, \vec x)
\end{aligned}
$$

This allows us to implement x to the power to y like the following:

![image-20240321164206497](./res/2_Recursion/image-20240321164206497.png)

However, this doesn't allow all recursive function. For example, a the fibbonaci function requires access to both the last and the second last value.

### Recursive Value Recursion (“Wertverlaufsrekursion”)

![image-20240321164545228](./res/2_Recursion/image-20240321164545228.png)

```haskell
valueRec :: ([Integer] -> Integer) -> Integer -> Integer
valueRec g n = g [ valueRec g (n-i) | i <- [1..n]]

fib = valueRec g
	where
		g [] = 1
		g [_] = 1
		g (x:y:_) = x + y
```

## Allgemeine Rekursion

```haskell

```

