# DSL

## Shallow Embedding



## Deep Embedding

Deep embedding is when defining a data type and forming an AST through the data type.

```haskell
data Shape
    = Empty
    | UnitDisk
    | UnitSq
    | Translate Vector Shape
    | ...
```

