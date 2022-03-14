# Preprocessor und Compiler

## Preprocessor

Der Preprocessor ist eine Textmaschine, welche Text ersetzten, einfügen und löschen kann.

Wenn man den Output nach den Preprocesser sehen möchte, kann man dies mit: `gcc -E <path>`

### `#define` und `#undef`

Mit `#define VARNAME <value>` kann eine Konstante definiert werden, welche vom Preprocessor ersetzt wird. 

Mit `#undef VARNAME` kann eine Konstante wieder gelöscht werden

Mit `gcc -DVARNAME` kann eine Konstante definiert werden. Dies kann hilfreich für die `#ifdef` Anweisungen sein.

### `#include`

* `#include <header.h>` importiert ein Headerfile, welches mit dem Compiler mit kommt, bzw. beim OS installiert sind
* `#include "header.h"` importiert ein Headerfile, welches im selbe Verzeichnis, wie das File, in welchem die Anweisung steht.

### `#if`, `#elif`, `#else`, `endif`, `#ifdef` und `#ifndef`

Mit diesen Anweissungen kann gewissen Code beim Kompilieren ignoriert werden.

Beim folgenden Beispiel wird der Debugging Output nur ausgegeben, wenn DEBUG definiert ist. Die selbe Anweissung könne man auch mit `#ifdef DEBUG` schreiben.

```c
#if defined DEBUG
	printf("Program Version 1 (Debugging)\n");
#else
	printf("Programm Version 1 (Production)\n");
#endif
```

Mit `gcc -DVARNAME` kann eine Konstante definiert werden.

## Compiler

Es kann nur den Compiler (und Preprocessor) mit `gcc -c <path_to_file>` aufgerufen werden. Dies produziert ein `*.o` File. In diesem gibt es noch Referenzen zu anderen Modulen und Files. 

## Linker

Der Linker kombiniert alle `*.o` Files in eine ausführbare Datei und löst die Referenzen im `*.o` File aufzulösen. Wenn gcc mit `*.o` Files aufgerufen wird, wird der Linker benützt (Befehl `gcc *.o`).