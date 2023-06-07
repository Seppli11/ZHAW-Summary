# Hardware

![image-20230117111125509](res/01_Hardware/image-20230117111125509.png)

## von Neumann Architeccture

![image-20220921110127297](res/image-20220921110127297.png)

Instructions und Data sind im selben Speicher gespeichert. Von dem datapath Modul werden arithmetik und Logik ausgeführt.  Die Control Unit liest und interpertiert die Instruktionen.

![image-20220921110318976](res/image-20220921110318976.png)

## Komponenten

### CPU

Der CPU ist unterteilt in die  Datapath und die Control Unit (und weitere). 

Den Datapath enthält die ALU und die Registers. 

In der Control Unit führt den fetch-exec Zyklus aus und kann Data-Transfers zwischen Memory und Registern, Arithmetische und Logische Befehle und Sprünge.

<img src="res/image-20220921110724439.png" alt="image-20220921110724439" style="zoom:67%;" />

### Memory

Arbeitspeicher wird auf bytes genau adressiert

### I/O

Bei Festplatten oder SSDs wird in Blocks auf Daten zugegriffen.

### System-Bus

Der System-Bus enhält:

* Address-Linien: Welche Adresse geschrieben oder gelesen wird
* Data-Linen: Die Daten
* Control-Signal: Ob geschrieben oder gelesen werden soll

## CPU-Komponente

### Register

Es gibt 16 Registern, davon sind R0 - R12 für allgemeine Daten zuverfügung. Der Stack Pointer (R13) zeigt auf die letzte Adresse des Stacks, der Link Register (R14) zeigt auf die letzte Rücksprung-Adresse, bei Funktionen und der Program Counter (R15) zeigt auf die nächste Instruktion, welche ausgeführt werden soll.

<img src="res/image-20220928102440026.png" alt="image-20220928102440026" style="zoom:67%;" />

### Arithmetic Logic Unit (ALU)

Die ALU hat zwei 32-bit Inputs und ein 32-bit Output. Die ALU kann Integer-Arithmetik (Plus, Minus, Multiplikation, Division), ebenfalls können And, Or, Not, Xor, right und left Shiften ausgeführt werden.

<img src="res/image-20220928102718172.png" alt="image-20220928102718172" style="zoom:50%; float: right" /> 

### Flag Register (APSR)

In diesem Flag stehen Status-Informationen zur letzten Operation

![image-20220928102949781](res/image-20220928102949781.png)

## Instruction Set

Es gibt mehrere Arten von Instructions:

* Data transfer
  * Daten von einem Register in ein anderes Register kopieren
  * Daten vom Speicher in Register laden
  * Vom Register in den Speicher speichern
* Data Processing
  * Arithmetische Operationen
  * Ligische Operatione
  * Shift / Rotate Operationen
* Control Flow:
  * Branches (Jumps)
  * Function calls
* Weiteres Instruktionen

![image-20230110165201836](res/01_Hardware/image-20230110165201836.png)

## Program Execution

![image-20220928105334607](res/image-20220928105334607.png)

## Memory Map

![image-20220928110619923](res/image-20220928110619923.png)

* Flash is non-volatile memory
* CCM RAM stands for Core Coupled Memory and is very fast

## C Integer Typen

Die folgenden Typen sollen in C verwendet werden, da "normale" Typen, wie `int long` Prozessor spezifisch sind.

![image-20220928110953005](res/image-20220928110953005.png)

## Multi-byte Integers

Bei **Little Endian** ist das Least-Significant-Byte (LSB) an der tiefereren Adresse. ST ARM benützt dieses Format.

Bei **Big Endian** ist das Most-Significant-Byte (MSB) an der tiefsten Adresse.

Im folgenden Beispiel steht die Zahl `0xA1B2'C3D4`.

![image-20220928111402114](res/image-20220928111402114.png)

Adressen werden aligniert. **Half-Words** werden auf gerade Adressen aligniert. **Words** werden auf durch 4 teilbare Adressen aligniert.

## Object-File

![image-20220928111738744](res/image-20220928111738744.png)

1111 + 1 = 0000 C=1 O=0

0111 + 1 = 1000 C = 0 O = 1

1000 - 1 = 0111 C = 0 O =1