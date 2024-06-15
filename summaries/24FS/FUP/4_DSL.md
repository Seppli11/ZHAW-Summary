# DSL

> DSL = Domain Specific Language
>
> EDSL = Embedded Domain Specific Language
>
> While a DSL has its own compiler/interpreter, an EDSL is embedded within another language. Thus the EDSL uses the a subset of the syntax of the host language.

## Shallow Embedding

Shallow embedding is when the EDSL reuses the semantics of the host language.

```haskell
type Exp = Int

plus  :: Exp -> Exp -> Exp
times :: Exp -> Exp -> Exp
const :: Int        -> Exp
```

The example above defines an EDSL for doing math in Haskell and reuses Haskells semantics of Integer for this.

## Deep Embedding

Deep embedding is when defining a data type and forming an AST through the data type. **The syntax and semantics are separated.**

```haskell
data Exp
	= Const Int
    | Add Exp Exp
    | Mul Exp Exp
    | Div Exp Exp
    
sEval :: Exp -> Int
Eval e = case e of
    Const x -> x
    Add e1 e2 -> sEval e1 + sEval e2
    Mul e1 e2 -> sEval e1 * sEval e2
    Div e1 e2 -> sEval e1 `div ` sEval e2
```

