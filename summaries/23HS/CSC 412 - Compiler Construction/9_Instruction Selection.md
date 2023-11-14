# Instruction Selection

## Tree Walk

By walking the AST and emitting the needed instructions for each node in the AST, wTe can generated the instructions with some simple code.

**TODO: insert tree walk example**

## Rewrite Rules

**TODO: Rewrite example**

Examples:

* `Num 12` -> `Reg` (8); `* (+(Lab, Reg))` (14)  

  ```assembly
  loadI 12 -> r1
  loadAI @G, r1 -> r2
  ```

* `Num 12` -> `Reg` (8); `(+(Lab, Reg))` (19); `*(reg)` (9)

  ```assembly
  loadI 12 -> r1
  add @G, r1 -> r2
  load r2 -> r3
  ```

* `Lab @G ` -> `Reg (6)`; `Num 12` -> `Reg` (8); -> `+ (Reg, Reg)` (15); -> `*(Reg)` (9) 

  ```assembly
  loadI l1 -> r1
  loadI 12 -> r2
  add r1, r2 -> r3
  load r3 -> r4
  ```

The following algorithm finds all possible reductions:

**TODO: check the tile algorithms**

```python
def tile(n):
    label[n] = {}
    if n is binary node:
        tile(n.left)
        tile(n.right)
        for each rule r:
        	if r.op == n.op and r.let in label[n.left] and r.right in label[n.right]:
                label[n].push(r)
    else if n is unary node:
        tile(n.left)
        for each rule r:
            if r.op == n.op and r.left in label(n.left):
                label[n].push(r)
    else: # n is a leaf
        for each rule r:
            if r.op == n.op:
                label[n].push(r)    
```

## Peephole Optimisation

The basic idea is to have a sliding window, the peephole, which slides over the code. There are rewrite rules, which match the instructions seen through the peephole and then rewrite them to a more efficient version. 

This kind of optimisation provides local optimisations, since it can only see a small amount of code at a time.

**TODO: Insert peephole example**