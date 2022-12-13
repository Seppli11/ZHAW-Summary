# Assembler

Arm is **little endian**, meaning that the MSB comes first, the LSB comes last.

## Basic Structure

```assembly
				; code area
				AREA	MyCode, CODE, READONLY
				
				ENTRY
start			MOVS 	R4, #12
				ADDS	R3, R4, #5
				B start
				
				; data area (writable)
				AREA 	MyData, DATA, READWRITE
var_byte		DCB		0x0A, 0x12, 0xFF
var_halfword	DCW		0x1234, 0xEEFF
var_word		DCD		0x88776655
space1			SPACE 	256	; allocates 256 bytes
space2			%		256	; same as above
				
				; stack
				AREA	STACK, NOINIT, READWRITE
stack_mem		SPACE	0x00000400 ; 0x0000'0400
```

## Data Types

There are bytes (`DCB` = 1 byte), halfwords (`DCW` = 2 bytes) and words (`DCD` = 4 bytes). They are layed out with LSB first (little endian)

For example, `0x1A2B'3C4D` is stored as ![image-20221108220326500](res/image-20221108220326500.png)

Another restriction is that halfwords addresses have to be divisable by 2 (address ends in even number), and word-addresses by 4 (address ends in `0`, `4`, `8` or `C`)

<img src="res/image-20221108220518439.png" alt="image-20221108220518439" style="zoom:67%;" />

```assembly
		AREA 	example1, DATA, READWRITE
var1	DCB		0x1A
var2	DCB		0x2B, 0x3C, 0x4D, 0x5E
var3	DCW		0x6F70, 0x8192
var4	DCD		0xA3B4C5D6
```

The code above produces the following memory map:

![image-20221108220730026](res/image-20221108220730026.png)

## Structures

### Jump Tables

```c
uint32_t result, n;
switch (n) {
case 0:
    result += 17;
    break;
        
case 1:
    result += 13;
    //fall through
        
case 3: case 5:
    result += 37;
    break;
        
default:
    result = 0;
}
```



```assembly
NR_CASES		EQU		6
case_switch		CMP		R1, #NR_CASES
				BHS		case_default
				LSLS	R1, #2			; * 4
				LDR		R7, =jump_table
				LDR		R7, [R7, R1]
				BX		R7
case_0			ADDS	R2, R2, #17
				B		end_sw_case
				
case_1			ADDS	R2, R2, #13

case_3_5		ADDS	R2, R2, #37
				B		end_sw_case
				
case_default	MOVS 	R2, #0
end_sw_case


				AREA	myData, DATA, READWRITE
jump_table		DCD		case_0
				DCD		case_1
				DCD		case_default
				DCD		case_3_5
				DCD		case_default
				DCD		case_3_5
```

## Interrupts

When code wants to react to some event on the system (like a button that's being pressed) then there are two ways to implement this. Either the code can constantly poll the state, checking over and over again if the event occurred. This, however, is inefficient and results in a lot of busy waiting, but it is simple, implicitly synchronised and deterministic.

### System Exceptions and Interrupts

Another solutions are interrupts: Arm processor differentiate between system exceptions and interrupts. System exceptions are errors created by events from the CPU (like a fault or the restart of the processor). Interrupts are created by events from peripherals or by a library.

The following system exceptions exists. The interrupts from 0 until 239 are defined and are located after the `SYSTICK` system exception. (eg. `IRQ14` has the exception number `30` at the address  `120=0x78`)

![image-20221207111424641](res/02_Assembler/image-20221207111424641.png)

### Interrupt Table

In the interrupt table is written where the processor has to jump if an interrupt or a system exception occurred. The interrupt table starts at the address `0x00`, but there is no system exception 0. This is because at the address `0x00` the initial stack pointer is written. This results in when the CPU starts, it first initialise the stack with the initial stack pointer and then calls the reset handler which *coincidentally* is at the next address.

### Execution of an Interrupt or System Exception

![image-20221207113538455](res/02_Assembler/image-20221207113538455.png)

<img src="res/02_Assembler/image-20221207111004691.png" alt="image-20221207111004691" style="zoom:80%;" />

The cpu checks when calling `BX LR` if the magic value `EXC_RETURN=0xFFFF'FFF9` is found in the `LR` register. If this is the case, then the previously saved registers are restored from the stack.
