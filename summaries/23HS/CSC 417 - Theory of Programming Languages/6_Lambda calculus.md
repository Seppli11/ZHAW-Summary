# Lambda Calculus

Lambda calculus is an alternative way to model turning machines.

> Definitions:
>
> * Variables: Denoted by ordinary lower case letters: $x, y, f, g, ...$
> * Abstractons: Denoted as $\lambda \langle var\rangle.\langle body \rangle$ (e.g. $(\lambda x.x)$ is the identity function)
> * Aplications: 
> * Terms: a term is constructed using the items above
>
> A variable is **bound**, if it is enclosed by a lambda and the lambda binds the term. On the other side, a **free** variable isn't defined by the 
>
> A $\lambda$ term with no free variables are called **combinator**

An interesting note, is that part of the reason why conditionals work, is because lambda calculus uses call-by-name semantics. In languages, like Python or Scheme, this won't work, since these languages will evaluate all parameters before calling the function.

## Reductions

There are three ways to manipulate a term:

* $\alpha$-conversion
* 

Lambda calculus uses normal-order "calls" functions, meaning that parameters are not evaluated before applying them to a function. Compare this with the applicative-order, where the parameters are evaluated before calling the function. This is the order "normal" programming languages use.