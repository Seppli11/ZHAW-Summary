# Tool Chain

A tool chain are the tools required to build an executable from the source code. There are both native and cross compiler tool chain. Native tool chains run on the same environment which the software will run on later, while a cross compiler creates an executable which runs in a different environment.

## Modules

<img src="res/image-20221130104321966.png" alt="image-20221130104321966" style="zoom:50%;" />

Each c (or assembler) file is viewed as a module and is processed one-by-one by the preprocessor, compiler and the assembler. All compiled modules are combined by the linker.

## C

### Declaration vs Definition

The following code only defines the names of a funciton, variable or struct. But their details aren't known to the compiler when compiling this module. (E.g. accessing a field of a struct wouldn't be possible)

```c
uint32_t square(uint32_t v); 	// square function defined elsewhere
extern uint32_t counter; 		// counter variable defined elsewhere
struct S; 						// struct S type defined elsewhere
```

The following code defines the a function, variable or struct with their details.

```c
uint32_t square(uint32_t v) { ... } 	// square function definition
uint32_t counter; 						// counter variable definition
struct S { ... }; 						// struct S type definition
```

### Header Files

```h
// square.h
#ifndef _SQUARE_H_ // incl.-
#define _SQUARE_H_ // guard
// declaration of square
uint32_t square(uint32_t v);
#endif // end of incl.-guard
```

The matching c file is:

```c
// square.c
#include "square.h"
// definition of square
uint32_t square(uint32_t v)
{
	return v*v;
}
```

### Linkage Reference

|                           | C names            | ASM Symbols                         | OBJ Symbols | AXF Executables |
| ------------------------- | ------------------ | ----------------------------------- | ----------- | --------------- |
| external linkage (export) | `extern` (default) | `EXPORT`-labels for exported labels | Global      |                 |
| external linkage (import) | `extern`(default)  | `IMPORT`-labels for imported labels | References  |                 |
| internal linkage          | with `static`      | normal labels                       | Local       |                 |
| no linkage                | local variables    | -                                   | -           |                 |

## Libraries

Libraries can be dynamically or statically linked. 

A static linked executable contains all required libraries. While this results in a bigger file as every executable needs to include the same libraries, it also prevents DLL-Hell.

