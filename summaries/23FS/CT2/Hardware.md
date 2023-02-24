# Hardware

## System Bus

The signal bus has address lines, data lines and control signals.

Address lines are unidirectional from the master to the slave. The master dictates on which address is operated upon. The number of lines is equal to the size of the address space.

The data lines are 8, 16, 32 or 64 parallel lines which transports the data. The data lines are bidirectional as data can be read or written.

The control signals provide the current command, like read or write, as well as timing information. There are four control signals:

* `CLK`: The clock signal
* `NE`: Not Enable
  Indicates the start and end of a read or write cycle
* `NWE`: Not Write Enabled
  Indicates that the CPU will write
* `NOE`: Not Output Enabled
  Indicates that the CPU will read

*Note: the N-prefix means that connected to ground means `1`,  connected to 5V means `0`. In other words, the line is active-log*

The slave is allowed to read and write data from and to the data lines on the fourth rising flank after NE was enabled.

The following diagram shows an example read and write operation.

![image-20230222111543185](res/Hardware/image-20230222111543185.png)

*(This <img src="res/Hardware/image-20230222112033421.png" alt="image-20230222112033421" style="zoom:50%;" /> symbol stands for all the data lines)*

To also support the half-word and byte version of `LDR` and `STR`, there are four `NBL` lines, which communicates to the slave which data lines are active. If one or two bytes are stored or loaded, the data lines used aren't necessary the first and second (as also seen in the byte example).

![image-20230222113114925](res/Hardware/image-20230222113114925.png)

The system bus has one clock which provides the clock signal on the bus with the control signals.

![image-20230222104055217](res/Hardware/image-20230222104055217.png)

All devices on the system bus are connected with a tri-state inverter

### Driver: Tri-State Inverter

A tri-state-inverter has one input and an enable line. When the enable line is set, then the inverter functions normally. If the enable line is cleared, then the tri-state inverter is not set or floating.

A CMOS Inverter is build in the following way: A n-type conducts if the gate is `1`, a p-type conducts if the gate is `0`.

![image-20230222105631033](res/Hardware/image-20230222105631033.png)

This can be extended to allow an additional enable state to disable the inverter:

![image-20230222105833457](res/Hardware/image-20230222105833457.png)