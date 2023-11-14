# Register Allocation

## Terms and definitions

* spilled: Writing a register into memory to free the register
* Liveness: A value is live between its definition and the uses of that value
* Live Range: The live range of a value is from its definition to its last use
* `MAXLIVE` is the maximal number of values live at a point. If the number of live values is larger than `MAXLIVE` then the some values have to be spilled
* Two values interfere with each other, if they are live simultaneously

## Interference Graph

In an interference graph $G_I$,

* Nodes represent values
* Edges represent two values interfering with each other

**TODO: Insert example**

A interference graph $G_I$ is said to be $k$-colourable iff (if an if only) the nodes can be labeld with integers $1...k$, so that no edge in G connects two nodes with the same label. Each colour can be mapped to a register.

If an interference graph is not easily $k$-colourable, change the graph by breaking one live range into some ranges through spilling and splitting.



![image-20231110110331851](./res/10_Register%20Allocation/image-20231110110331851.png)



## Chaitin's Algorithm

1. While existing vertices with $< k$ neighbours in $G_I$
   1. Pick any vertex $n$ whose degree is less than $k$ and put it on the stack
   2. Remove that vertex and all edges incident to it from $G_I$ (This will lower the degree of $n$'s neighbours')
2. If $G_I$ is still non-empty (all vertices have $k$ or more neighbours), then:
   1. Pick a vertex $n$ (using some heuristic) and spill the live range associated with $n$
   2. Remove vertex $n$ from $G_I$, along with all edges incident to it and put it on the stack
   3. If this causes some vertex in $G_I$ to have fewer than $k$ neighbours, then go to step 1; otherwise repeat step 2
3. Successively pop vertices of the stack and colour them in the lowest colour not used by some neighbour
4. Spill or split uncoloured nodes and build the new $G_I$ and start over