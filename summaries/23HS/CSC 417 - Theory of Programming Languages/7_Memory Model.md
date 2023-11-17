# Memory Model

## Tagged Union

A way to represent a union with a tag, is to reserve some bits of a word, and make it represent the type.  For example use the last 2 bits to store `00` for a symbol, `01` for a pointer, `10` for an integer and a `11` for a string. However, this is quite a bit of work, since to do anything with the data, first we have to remove the type data, do the operation, and then add the type data back.

* Integer/Float
  First remove type data, do the operation, add type data back
* Symbol
  A symbol can be represented by a pointer into a table of strings