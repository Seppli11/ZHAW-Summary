# Parser

## Context Free Grammar

```
SheepNoise -> SheepNoise baa 
			| baa
```

Formally a context-free grammar is a four tuple $G = (S, N, T, P)$, where

* $S$ is the start symbol
* $N$ is a set of non-terminal symbol
* $T$ is a set of terminal symbols
* $P: N \to (N \cup T)^+$ is a set of productions/rewrite rules

**TODO: insert example of derivation**

A sequence of rewrites is called a **derivation**, while the process of discovering a derivation is called **parsing**.

There are two kind of derivations:

* **Leftmost derivation**: replace the left most non-terminal symbol
* **Rightmost derivation**: replace the right most non-terminal symbol

A derivation can also be represented in a parse tree. A natural way to compute such a tree, is to walk it in post-order (visit children before the parent).

**TODO: Insert parse tree image**

### Precedence in Derivation

To add the precedence of operators to a grammar, there has to exist a non-terminal for each level of precedence. The parser then should recognise high precedence sub-expressions first.

A grammar for mathematical expression with precedence would look like the following:

```
Goal	-> Term
Expr	-> Expr + Term
		|  Expr - Term
		|  Term
Term 	-> Term * Factor
		|  Term / Factor
		|  Factor
Factor 	-> <number>
		|  <id>
```

The following is the leftmost derivation of the above rules of `x - 2 * y`:
```
- Goal
1 Expr
3 Expr - Term
4 Term - Term
7 Factor - Term
9 <id> - Term
5 <id> - Term * Factor
7 <id> - Factor * Factor
8 <id> - <number> * Factor
9 <id> - <number> * <id>
```

### Ambiguous Grammar

```
Stmt	-> "if" Expr "then" Stmt
		 | "if" Expr "then" Stmt "else" Stmt
```

With the above grammar, both example 1 and example 2 would be valid derivations
```
// example 1
if Expr1
	then if Expr2
		then Assignment1
		else Asignment2

// example 2
if Expr1
	then if Expr2
		then Assignment1
    else Asignment2
```

A way to disambiguate this, is the following grammar:

```
Stmt	-> "if" Expr "then" Stmt
		 | "if" Expr "then" WithElse "else" Stmt
		 | OtherStmt
WithElse -> "if" Expr "then" WithElse "else" Stmt
		  | OtherStmt
```

### Deeper Ambiguity

A deeper ambiguity like in Matlab `a = f(17)` `f` could be a function or an array. However, this kind of deeper context-sensitive ambiguity cannot be solved in a grammar and need to be solved at a later pass in the compiler.  

## Parser Implementation

**TODO: Insert comparison picture**

### Top-Down Parser

1. Construct the root node of the parse tree
2. Repeat the following steps
   1. At a node $A$, select a production with $A$ on its left-hand side and, for each symbol on its right-hand side, construct the appropriate child
   2. When a terminal symbol is added to the fringe and it doesn't match the fringe of input, **backtrack**
   3. Find the next node to be expanded

**TODO: Insert example**

Another possibility to derive the grammar can lead to an infinite loop.

**TODO: Insert non-terminating example**

A top-down parser cannot parse a left-recursion since it uses the leftmost derivation. However, a top down parser can handle right recursive grammars.

#### Convert Left Recursion to Right Recursion

The following rule can be rewritten:

```R
Fee -> Fee "+"
	 | "-"
```

The rule above can be rewritten into the following:

```r
Fee -> "-" Fie
Fie -> "+" Fie
	 | "" 		// empty string
```

Both of these grammar accept the same input, but the latter one is right recursive and can be parsed by a top down parser.

**TODO: Other example**


An algorithm to eliminate left recursion is:

1. arange the non-terminals into some order $A_1, A_2, ..., A_n$
2. for $i \leftarrow 1$ to $n$
   1. for $s \leftarrow 1$ to $i - 1$
      1. replace each production $A_i \to A_s\gamma$ with $A_i \to \delta_1 \gamma \mid \delta_2\gamma \mid ... \mid \delta_k\gamma$, where $A_s \to \delta_1 \mid \delta_2 \mid ... \mid \delta_k$ are all the current productions for $A_s$
   2. subsitude**TODO: finish algorithm**


The following example has an indirect left recursion (E -> T -> E ~ T -> T ~ T -> E ~ T ~ T ...):

```R
G -> E
E -> E + T
E -> T
T -> E ~ T
T -> "id"
```

Running the algorithm yields the following:

1. The order of the non-terminal symbols is: $G, E, T$
2. $G$ isn't rewritten since they are no symbols before $G$ and it isn't directly left recursive
3. $E$ is rewritten to $E \to T E'; E' \to T E' \mid \varepsilon$  
4. $T$ follows $A_i \to A_s\gamma$ it is subsituded by $T \to T E' ~T$
5. Additionally $T$ has a direct recursion: $T \to id T'; T' \to E' \sim T T'; T' \to \varepsilon$

All of these rewrites and substitutions yield the following result:

```
G 	-> E
E 	-> T E'
E' 	-> + T E'
E' 	-> "" 			// empty string
T 	-> "id" T'
T'	-> E' ~ T T'
T' 	-> "" 			// empty string
```

#### Another Example

```
A 	-> B x
B	-> C y
C	-> A z | z
```

1. Order $A, B, C$
2. 

### Bottom-Up Parser
