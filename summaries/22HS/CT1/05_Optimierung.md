# Optimierung

## Architekturen

* von Neumann Architecture
* Harvard Architecture

## Instruction Set Architecture

* RISC
* CISC 

## Pipelining

![image-20221221104027936](res/05_Optimierung/image-20221221104027936.png)

Instead of fetching, decoding and executing each instruction in sequence, the CPU can already start fetching the next instruction while decoding the current instruction.

![image-20221221104044762](res/05_Optimierung/image-20221221104044762.png)

However, if multiple stage run simultaneously then each instruction needs to be finished at the same time.   

![image-20221221105655316](res/05_Optimierung/image-20221221105655316.png)

In the example above, without pipelining the CPU could execute $\frac {1s}{15ns} = 83.3\cdot 10^6 \frac T {sec}$. With pipelining the cpu can execute $\frac {1s}{5ns} = 200\cdot 10^6 \frac T {sec}$. This results in a 140% increase in performance.
$$
InstructionsPerSecond&=\frac 1{InstructionDelay}\\
InstructionsPerSecond &= \frac 1 {MaxStageDelay}
$$
<img src="res/05_Optimierung/image-20221221110425974.png" alt="image-20221221110425974" style="zoom:67%;" />

### Problems

In the optimal case, the CPU can move each instruction one stage forward per cycle.

![image-20221221110539087](res/05_Optimierung/image-20221221110539087.png)

But not each instruction takes only one cycle, like `LDR` or instruction changing the `PC`. This can be mitigated to a degree by out of order execution. By duplicating some elements of the execution unit, the CPU can reorder the `LDR` instruction with an earlier instruction which can run simultaneously. When the requested value is required, the value will already be loaded.

![image-20221221110852969](res/05_Optimierung/image-20221221110852969.png)

### Branching

![image-20221221111235464](res/05_Optimierung/image-20221221111235464.png)