# Instructions Scheduling

Different instructions take different amount of cycles to complete.

## The Task of Instructions Scheduling

The goal is to reorder instruction to maximise:

* The amount of spill
* ...**TODO**

Importantly, this mustn't change the behaviour of the code.

To do this, a dependency graph of the instructions is built. Additionally, it is important to consider **anti-dependence**. This occures when $n_1$ appears before $n_2$ and $n_2$ outputs result to a register that $n_1$ uses for its operands (in the following example `d` and `e`). An anti-dependence **cannot** be reordered. However, anti-dependency can be resolved by renaming registers to remove the anti-dependence.

**TODO: Insert example**

A correct schedule $S$ maps each $n \in \mathbb N$ into a non-negative integer representing its cycle number, and:

1. if $(n_1, n_2)$ is one depdence edge, $S(n_1) + delay(n_1) \le S(n_2)$
2. for each type $t$, there are no more operations of type $t$ in any cycle that the target machine can issue

The length of a schedule $S$, denoted $L(S)$, is
$$
L(S) = \max_{n\in \N}(S(n) + delay(n))
$$
A schedule $S$ is **time-optimal**, if $L(S) \le L(S_1)$ for any other schedule $S_1£

## Big Picture Algorithm

1. Build a dependence graph $P$
   Walk the def-use dependencies of a basic block from the back
2. Compute a priority function over the nodes in $P$
3. Use list scheduling to construct a schedule, one cycle at a time
   1. Use a queue o operations that are ready
   2. At each cycle
      1. Choose a ready operation and schedule it
      2. Update the ready queue

A priority function might be the weight of the longest latency-weighted path from a root node to this node

The last step can be computed with the following argument.

The following variables are defined in the following way:

* $cycle$ is a counter
* $ready$ is a set of instructions which are ready to be schedule
* $active$ is a priority queue sorted by the priority of step 2

The following describes the algorithm:

1. $cycle \leftarrow 1$
2. $ready \leftarrow \text{leaves of } P$
3. $active \leftarrow \emptyset$
4. while($ready \cup active \neq \emptyset$) 
   1. if($ready \neq \emptyset$)
      1. remove an op from $ready$
      2. $S(op) \leftarrow cycle$
      3. $active \leftarrow active \cup op$
   2. $cycle \leftarrow cycle + 1$
   3. for each $op \in active$
      1. if $S(op) + delay(op) \le cycle$
         1. remove $op$ from $active$
         2. for each successor $s$ of $op$ in $P$
            1. if $s$ is ready then $ready \leftarrow ready \cup s$

