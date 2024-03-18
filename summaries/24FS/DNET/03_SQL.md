# SQL

## SQL Server Architektur

TDS ist das Protokoll, mit welchem C# und MS-SQL Server kommuniziert. TDS auf maximale Performance optmiert. 

<img src="./res/03_SQL/image-20240315141116515.png" alt="image-20240315141116515" style="zoom:70%;" />

Direkt vom Browser kann nicht auf den Server zugegriffen werden.

Im unten stehenden Diagramm sieht man ein 5-Schichten-Modell, wie ein DBMS aufgebaut ist.

![image-20240315143240940](./res/03_SQL/image-20240315143240940.png)

Das unten stehende Diagramm zeigt die Architektur noch auf eine andere Art:

![image-20240315143515181](./res/03_SQL/image-20240315143515181.png)

> **Query Optimizer**
>
> ```sql
> SELECT * FROM person WHERE name = "Müller"
> ```
>
> Dieses SQL Statement kann auf mehrere Arten umgesetzt werden:
>
> * Alle Reihen lesen und sehen, ob `name="Müller"` ist
> * `name` könnte sortiert sein und dann kann das DBMS ein Binär-Suche machen
> * `name` könnte indexiert sein. Über den Index kann direkt die entsprechenden Blöcke gelesen werden
>
> Alle diese Möglichkeiten haben unterschiedliche Performance-Charakteristiken. Der Optimizer sorgt dafür, dass die schnellste Möglichkeit gewählt wird.
>
> Wenn z.B. alle Reihen `"Müller"` sind, dann ist es schneller, alle Reihen zu lesen, anstelle einen Index zu verwenden.

Es gibt zwei Möglichkeiten wie SQL ausgeführt werden kann:

* **Statisches SQL**:
  SQL-Anweisungen zum Zeitpunkt der Programmübersetzung bekannt und festgelegt (z.B. Stored Procedure). Daher kann der Execution Plan wiederverwendet werden
* **Dynamisches SQL**
  SQL-Anweisungen werden erst zum Zeitpunkt der Programmausführung bekannt und werden z.B. per String übergeben. Da jedes mal der Optimizer laufen muss, ist dieser Weg ein wenig langsamer (Allerdings kann Execution-Plan Caching helfen). Ein weiterer Punkt ist, dass statisches SQL keine SQL-Injection zulässt.

## T-SQL Datentyps

| SQL            | C#              | Erklärung                                                    | 1-1 Abbildung                   |
| -------------- | --------------- | ------------------------------------------------------------ | ------------------------------- |
| bit            | bool?           | True oder False                                              | x                               |
| -              | sbyte           |                                                              |                                 |
| smallint       | short?          | 16bits, -32'768 - 32'767                                     | x                               |
| int            | int?            | 32bits, -2,147,483,648 - 2,147,483,647                       | x                               |
| bigint         | long?           | 64bits                                                       | x                               |
| tinyint        | byte?           | 8bits, unsigned                                              | x                               |
| -              | ushort          | 16bits, unsigned                                             |                                 |
| -              | uint            | 32bits, unsigned                                             |                                 |
|                | ulong           | 64bits, unsigned                                             |                                 |
| float          | -               | -1.79E+308 to -2.23E-308, 0 and 2.23E-308 to 1.79E+308, depends on n<br/>n = 1-24: 32 bits, 7 digits precision<br/>n = 25-53: 64 bits, 15 digits precision<br/>nahe IEEE-754-Standard |                                 |
| real           | -               | 32 bits, - 3.40E+38 to -1.18E-38, 0 and 1.18E-38 to 3.40E+38<br/>nahe IEEE-754-Standard, entspricht float(24) |                                 |
| -              | float           | 32 bits, range from ±1.5E−45 to ±3.4E38, IEC-60559 format    |                                 |
| -              | double          | 64 bits, range from ±5.0E−324 - 1.7E308, IEC-60559 format    |                                 |
| decimal(n)     | -               | <img src="./res/03_SQL/image-20240315152401756.png" alt="image-20240315152401756" style="zoom:50%;" /> |                                 |
| -              | decimal         | 128 bits, range is at least –7.9E−28 - 7.9E28, with at least 28-digit precision |                                 |
| decimal(28,14) | decimal?        | ACHTUNG: die Anzahl Kommastellen ist im SQL fix 14! Im C# ist es eine Floating-Point-Number. | beste, mögliche Übereinstimmung |
| char(n)        | -               | ASCII, n Zeichen/Bytes lang (max. 8000, abhängig von Encoding, ev. UTF-8 abhängig von Collation) |                                 |
| varchar(n)     | -               | ASCII, n Zeichen/Bytes lang (max. 8000, abhängig von Encoding, ev. UTF-8 abhängig von Collation) |                                 |
| nchar          | -               | UTF_16, n bytes lang                                         |                                 |
| nvarchar       | -               | UTF-16, n bytes lang                                         |                                 |
| nvarchar(max)  | string?         | max 2^31-1 bytes (2 GB), abhängig von Encoding (C # meist UTF-16 encoding) | x                               |
| char(1)        | char?           | 16 bit, abhängig von Encoding (SQL Server: z.B. UTF-8, C#: meist UTF-16 encoding) |                                 |
| date           | -               | 0001-01-01 bis 9999-12-31                                    |                                 |
| datetime       | -               | 1753-01-01 bis 9999-12-31, 00:00:00 bis 23:59:59.997         |                                 |
| datetime2      | DateTime?       | - SQL: 0001-01-01 bis 9999-12-31, 00:00:00 bis 23:59:59.997<br/>- .NET: 0001-01-01 bis 9999-12-31, Auflösung: 100-Nanosekunde, enthält<br/>DateTimeKind (UTC, local, not specified) |                                 |
| datetimeoffset | DateTimeOffset? | • SQL:0001-01-01 bis 9999-12-31 (Datum), 00:00:00 bis 23:59:59.997 (Zeit) und<br/>+-14 Offset (hh:mm) – enthält Abweichung (Offset) zu UTC<br/>• .NET: DateTime plus Offset (TimeSpan) |                                 |
| smalldatetime  | -               | 1900-01-01 bis 2079-06-06, 00:00:00 bis 23:59:59.997         |                                 |
| time           | -               | 00:00:00.0000000 through 23:59:59.9999999                    |                                 |

## Programmieren in SQL

* Es reduziert die Netzwerklast, da die Daten nicht über das Netzwerk gesendet werden müssen
* SQL-Server können sehr schnell auf diesen Daten arbeiten und sind für das ausgelegt
* Sicherheit ist höher, da kein dynamisches SQL ausgeführt wird

![image-20240315153534593](./res/03_SQL/image-20240315153534593.png)

### `GO`

Gibt eine Meldung an den Client zurück und signalisert das Ende eines Batches. Es gibt einige Orte, wo das `GO` vornöten ist. Batches haben einige Regeln:

* Lokale Variable sind nur innerhalb des Batches sichtbar
* Darf nicht innerhalb der Definition einer Stored Procedure verwendet werden
* `CREATE PROCEDURE` muss am Anfang eines Batches stehen

Es ist keine T-SQL Anweisung, daher ist kein Semikolon vornöten.
