# Memory

![image-20230607100242760](res/Memory/image-20230607100242760.png)

## Memory Cell

One memory cell is a transistor which can pull down the bit line, if "set". This means a transistor is by default `1`, and only if programmed can become a `1`.

![image-20230412102854709](res/Memory/image-20230412102854709.png)

## ROM

### Programmable Read-Only Memory (PROM)

This kind of memory can only be written to once by burning fuses. When the fuse is burnt, the data line will be `1`. Otherwise, if not burn, then the data line will be `0`.

![image-20230412102517838](res/Memory/image-20230412102517838.png)

In addition, see diagram below.

### Floating Gate Memory

Memory cells are organised in a grid:

![image-20230607101515230](res/Memory/image-20230607101515230.png)

![image-20230412103114085](res/Memory/image-20230412103114085.png)

### NOR and NAND Flash![image-20230607103506202](res/Memory/image-20230607103506202.png)

![image-20230412103212965](res/Memory/image-20230412103212965.png)

![image-20230614154817798](res/Memory/image-20230614154817798.png)

## RAM

### Static Random Access Memory (SRAM)

*(Has an asynchronous interface/without a clock)*

SRAM has the following advantages and disadvantages:

* All accesses take roughly the same time, independent of what was previously read/written or the location
* No refreshs are needed
* Memory is volatile

![image-20230412110804532](res/Memory/image-20230412110804532.png)

![image-20230412111028244](res/Memory/image-20230412111028244.png)

*(X=don't care, L=low, H=high)*

The control lines are active-low, meaning that `L=enabled` and `H=disabled`

The following shows the internal of SRAM:

![image-20230419101259401](res/Memory/image-20230419101259401.png)

SRAM uses a stable circuit which "self-confirms". This can be easily be archived by chaining two inverters.

<img src="res/Memory/image-20230419101355479.png" alt="image-20230419101355479" style="zoom: 50%;" />

To override such a circuit, one has to apply a high voltage current (a `1` to one side and a `0` to the other side). Because of the high voltage, this will overpower the inverters and overwrite their value.

The following steps explain how to write and read an SRAM cell.

![image-20230419101920324](res/Memory/image-20230419101920324.png)

### Synchronous Dynamic Random Access Memory (SDRAM)

SDRAM uses a capacitor as a battery to store the individual bits. However, capacitor loos their charge over time and thus the RAM controller needs to periodically read and immediately write the value back to recharge the capacitor.

<img src="res/Memory/image-20230419102611607.png" alt="image-20230419102611607" style="zoom: 67%;" />  <img src="res/Memory/image-20230419102812677.png" alt="image-20230419102812677" style="zoom:67%;" />

The following diagram shows the layout of a SDRAM chip.

![image-20230419103024045](res/Memory/image-20230419103024045.png)

Compared to SRAM, SDRAM has a lot wider storage matrix. This makes the refreshing faster, but also more complicated.

To access a byte in SDRAM, the FMC/CPU first enables `not RAS` (row address strobe) by writing `0`  and sending the row address.  When `not RAS` is zero, the address is sent to the row decoder. Then `not CAS` is set to `0` which causes the next address being sent to the column decoder.

For the first byte, the SDRAM needs a lot of cycle, but further bytes in the same row are really fast as the row is already "loaded". This makes this storage technology not appropriate for direct CPU access. To still be able to use DRAM, the CPU has caches which are a lot faster and more predictable.

![image-20230419103354148](res/Memory/image-20230419103354148.png)

Comparison:

![image-20230419103715269](res/Memory/image-20230419103715269.png)

## STM32F429ZI

The following shows the simplified architecture of the STM32F429ZI:

<img src="res/Memory/image-20230607105600596.png" alt="image-20230607105600596" style="zoom:80%;" />

Sectors can only be erased as a whole.

![image-20230412103946463](res/Memory/image-20230412103946463.png)

The flash has a 128bit buffer in front, which pre-fetches the next instructions. This minimises the latency of flash.

![image-20230412104150880](res/Memory/image-20230412104150880.png)

### Flexible Memory Controller (FMC)

The FMC allows a programmer to specify how external memory is mapped to the CPU.

<img src="res/Memory/image-20230412105614619.png" alt="image-20230412105614619" style="zoom:50%;" />

The FMC is a slave on the system bus and a master on the external bus.

<img src="res/Memory/image-20230412105648414.png" alt="image-20230412105648414" style="zoom:80%;" />

The external bus has a 26-bit address bus with 8, 16 or 32 bit data lines.

If the FMC needs to translate a 32-bit bus to a lower bit bus (e.g. 16bit or 8bit bus) then the FMC needs to write multiple data packages. The FMC caches the data, meaning that while the FMC is writing, the CPU and system bus can do something else.

![image-20230412105947666](res/Memory/image-20230412105947666.png)

If reading, the CPU and system bus need to wait for the external read to finish.

![image-20230412110241387](res/Memory/image-20230412110241387.png)

The FMC controls the following memory area:

<img src="res/Memory/image-20230412110513991.png" alt="image-20230412110513991" style="zoom:67%;" />

Each bank are designed for different kind of memory. The FMC will produce different electrical signals for different "bank types". 

Each bank can have 4 devices connected.

### Bank 1 (SRAM, NOR, PSRAM)

The following shows a schematic of the wiring of bank 1:

![image-20230607111210881](res/Memory/image-20230607111210881.png)

The following truth table shows the selected functionality when different pins are high/low.

<img src="res/Memory/image-20230607111309450.png" alt="image-20230607111309450" style="zoom:67%;" />

The following table shows the inputs and outputs of the FMC:

<img src="res/Memory/image-20230412111306866.png" alt="image-20230412111306866" style="zoom:67%;" />

![image-20230412111331421](res/Memory/image-20230412111331421.png)

The FMC is connected in the following way:

![image-20230412111401473](res/Memory/image-20230412111401473.png)

The following configuring options exist:

![image-20230412112258633](res/Memory/image-20230412112258633.png)

![image-20230412112409890](res/Memory/image-20230412112409890.png)

`HCLK` is the clock cycle of the CPU and the internal bus and is configured to 82 MHz during the startup of the CT board.