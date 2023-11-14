# Code Shape

To generate IR, a compiler can do a tree walk and emit the necessary instructions for each node. This is mostly a bottom-up tree walk. An alternative strategy is to do ad-hoc translation and define rules for each context-free grammar rule.

## Parameters

**TODO**

To reduce register usage, the compiler should generate the instructions with a lot of parameters first.

## Mixed Type Operators

If there is an operation which can deal with mixed typed parameters, a conversion table can be constructed. 

| +       | Integer | Real |
| ------- | ------- | ---- |
| Integer | Integer | Real |
| Real    | Real    | Real |
|         |         |      |

Most languages have symmetrical conversion tables.

## Register or Storage

A value can be loaded into a register and kept there for multiple calculation. However, there are situations where this causes errors. A compiler is only allowed to keep a value in a register, if there is only one name for that variable. As soon as there are pointers involved, the correctness can be in jeopardy. 

## Assignment

When generating code for an assignment statement of the form `lhs = rhs`, if 

* `lhs` is a register, move `rhs` into `lhs`
* `lhs` is an address, store `rhs` at the memory address of `rhs`

If `rhs` is a scalar value (like an int), then it can be stored in a register. If, however, `rhs` is some aggregate data type (like a `struct`, `class` or similar), then it needs to be stored in memory. 

## Arrays

**TODO: insert arrays data layout graphics**

For `a[i]`, the following calculations needs to be made: $base(A) + (i - low) \cdot sizeof(A[1])$

For two multi dimensional array, it depends how the rows are accessed:

* Row-major order:
  $base(A) + ((i_1 - low_1) \cdot (hight_1 - ))$





However, this can be optimised by factoring out part of the calculation:

## Control Flow

### If

Most instruction sets compare against zero (e.g. `cmp_LT rx, ry`) and then set specific flags based on the comparison. 

Sometimes an instruction set also contains instructions for conditional move, where depending on a comparison, one value is assigned over another.

A third control flow related instruction is that a instruction is only executed in certain comparisons.

A disadvantage of jumps is that they can cause bubbles in the the pre-fetch pipeline. Conditional moves and predicated execution avoids this by not jumping.

These instructions can be used for example:

`if (x < y) then stmt1 else stmt2` could be translated into the following:

```assembly
cmp_LT 	rx, ry -> r1
cbr		r1 -> _stmt1, _stmt2
```

A more complex example:

```c
if(x < y) {
	a = c + d;
} else {
	a = e + f
}
```

```assembly
	cmp_LT 	rx, ry -> r1
	cbr 	r1, L1, L2 ; cbr = conditional branch
L1: add rc, rd -> ra
	br L0
L2:
	add re, rf -> ra
	br L0
L0:	NOP
```

Another way is to use conditional moves:

```assembly
cmp		rx, ry -> cc1
add		rc, rd -> r1
add		re, rf -> r2
i2i_LT	cc1, r1, r2 -> ra # conditional move. only moves if cc is lt
```

Or it could be translated with predicate execution instructions:

```assembly
		cmp_LT	rx, ry -> r1
(r1)?	add		rc, rd -> ra
(!r1)?	add		re, rf -> ra
```

*(predicate execution is usually implemented by still computing the instruction, but not committing the value)*

In the example of `x = a < b && c < d`, boolean compare produces much better code. The following code uses jump instructions:

```assembly
	cmp ra, rb 
	...
```

While the following code uses 

```assembly
cmp_LT	ra, rb -> r1
cmp_LT	rc, rd -> r2
and		r1, r2 -> rx
```

If the instructions are independent, jumps might be better, since multiple processing unit can process instructions independently. 

### Loops

**TODO: Insert basic loop structure flow diagram**

**TODO: Insert code example**

### Switch Statement

1. One way is to just linearly search through the entire (for a small amount of cases)
2. Build a table where the value is the jump address. The program can then do a binary search over the keys, which represent the case expression (for a lot of cases which are not dense)
3. Build a jump table; compute the memory address in the jump table and then jump there (for a lot of dense cases)

### Procedure

*(See Procedure Abstraction)*

## Strings

In C, strings are null terminated. However, in other language, this isn't necessarily the case. Another approach is to store how long the string is before the character data.

Code like `a[1] = b[2]`, is relatively easy on machines with instructions which can load and store bytes. However, if the instruction set only supports word-sized IO instructions then the compiler has to generate instructions to mask the rest of the word.

## Structs

The address structures, the compiler will build an **internally** accessable table to record the offsets where to find fields.

**TODO: Insert diagram of the structure layout table and the element table**

```c
struct node {
    int value;
    struct node *next;
}
struct node NilNode = {0, (struct node*) 0};
struct node p1 = {2, &NilNode};
```

The generated code for `p1->next` would like something like this:

```assembly
loadI	4 -> r1
loadA0	rp1, r1 -> r2
```

## OOP Languages

**TODO: Insert object record**

To find the correct method to call, the compiler has to insert code to do dynamic dispatching.

## Determining Types



Another way is **Type Inference**, where the compiler uses the available type information to inference the type of an expression.
