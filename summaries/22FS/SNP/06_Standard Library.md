# Standard Library

## stdio.h

### `perror`

`void perror(char *s)` druckt den letzten Fehler mit der angegebenen Nachricht aus.

### `printf`/`sprintf` (man 3 printf)

`printf(char *format, args...)` formatiert die `args` anhand von dem `format`. Es gibt 3 relevante Methoden:

* `printf(char *format, args...)` druckt den formatierten String in die Konsole
* `sprintf(charr *str, char *format, args...)` schreibt den formatierten String in die Variable `str`.
* `fprintf(FILE *stream, char *format, args...)` schreibt den formatierten String in das File `stream`

Jeder Platzhalter folgt dem Muster `%[flags][width][.precision]conversion` 

Die `width` gibt an, wie viel Platz vor der Variable soll sein. Wenn die Zahl mit einem `0` prefixt ist (z.B. `022`), wird die Zahl 0-padded. Dies wird allerdings nur von Zahlen, wie Integers oder Doubles unterstützt.

Die `.precision` gibt an, wie viele Stellen nach dem Komma gedruckt werden sollen und wird nur für Kommazahlen unterstützt.

Anstatt eine Zahl für `width` und `.precision` kann auch ein `*` verwendet werden. Dabei wird der Wert als Input genommen. Beispiel: `printf("%0*.*f", 7, 2, 2.456666)` würde `0002.46` ausgeben.

Das `flag` kann `-` sein, was bewirkt, dass das Feld left-adjusted wird.

Folgende Conversions sind gängig:

| Typ          | C      | Erklärung                                                    | Beispiel                                      |
| ------------ | ------ | ------------------------------------------------------------ | --------------------------------------------- |
| int          | d, i   | gibt ein int aus. Precission ist nicht unterstützt           | `%02i` (druckt `03`)                          |
| unsinged int | u, x/X | u gibt die Zahl in dezimal aus, x in Hex als kleine Buchstaben (ff) und X mit grossen Buchstaben (FF) | `%04u` (druckt `  0022`), `%X` (druckt `AF2`) |
| double       | f      | gibt double aus                                              | `%.3f` = "2.340"                              |
| char         | c      | gibt ein char aus. Precission und 0-padding sind nicht unterstützt | `%2c`= "  d"                                  |
| char*        | s      | gibt ein string aus                                          | `%s` = "Hello world"                          |

### `scanf`

`scanf(char *format, ...)` liest ein Format vom stdin. Es gibt auch `fscanf(FILE *stream, char *format, ...)`, was von einem File scannt und `sscanf(char *str, char *format, ...)`, was von einem String scannet.

Als Rückgabe Wert wird die Anzahl von gefunden Inputs zurück gegeben.

Das Format ist wie bei `printf` mit einigen Änderungen.

* `f` ist nur für floats
* `lf` muss für doubles genutzt werden

`scanf("hello %d", i)` wäre nicht valide, da keine fixe Strings im `scanf`-Format stehen darf

## `int getchar()`

Blockiert, bis der Nutzer eine Zeile in die Konsole eingegeben hat. Danach wird jeweils ein Zeichen von diesem Buffer gelesen und zurück gegeben. Wenn stdin geschlossen wird, wird `EOF` zurück gegeben.

## String-Library

* `int strlen(char *str)`
  Die Länge des Strings (ohne `\0`)
* `int strcmp(char *s1, char *s2)`
* `char* strcpy(char *dest, char *src)`
* **TODO: split?**