# Knotenregel

Was in ein Kabel an Ladung(I) hinein geht, muss auch wieder raus.

Mit der Knotenregel kann man erklären, wieso in einer Parallelschaltung die Ladung sich aufteilt. Denn was in einen Knoten hinein geht, muss sich aufteilen.

# Maschensatz

Eine Masche ist ein "Loop" im Stromkreis. Alle Ströme (V) zusammen müssen 0 ergeben. Mit dem kann man erklären, wieso in Parallelschaltungen auf beiden Leitungen der Strom gleich bleibt. Bei einer Serienschaltung gibt es nur eine Masche, daher bleibt der Strom nicht gleich bei einer Serienschaltung.

# Elektronischebauteile

- Ohm'scher Leiter hat eine Lineare Spannungs-Strom-Charakteristik. Nicht-Ohm'scher Leiter hingegen nicht (z.B. LED's).

## Wiederständen

- Das Ohm'sche Gesetzt gillt: $U=R \cdot I$
- Die Leistung : $P=U\cdot I=\frac {U^2} R = I^2R$

## Kondensatoren

Ein Kondensator ist eine Art Feder, durch welche kein Strom fliessen kann. Beim Aufladen werden immer mehr Elektronen hinein gepumpt. Daher wird es immer schwieriger noch mehr Elektronen hinein zu pressen, je voller der Kondensator wird.

- Ladung kann mit $CU_c = Q$ berechnen. C stellt dabei die Kapazität in Farad [F] and (nicht die Ladung)
- Ein Kondensator ist **kein** Ohm'sches Bauteil und folgt demnach nicht dem Ohm'schen gesetzt.
  Anstatt kann folgende Exponentialfunktion für Q benutzt werden. $U_0$ ist dabei die Spannungsquelle, C die Kapazität in Fahrad und R der Wiederstand, durch welcher der Strom fliessen muss: 
  - für zum Laden: $Q(t) = U_0\cdot C (1 - e^{\frac{-t}{R\cdot C}})$
  - für zum Entladen: $Q(t) = U_0\cdot C (e^{\frac{-t}{R\cdot C}})$
- Um U (Strom) des Kondensators zu berechnen, einfach das $\cdot C$ aus der Gleichung entfernen, da $C\cdot U_c=Q \rightarrow U_c=\frac Q C$ bedeutet

### Schwinungen

//TODO

## Spule

Wenn durch eine Spule Strom (V) fliesst, dann erzeugt dies ein Magnetfeld. Beim Hochfahren des Stromes (V) wird Energie benötig, um das Magnetfeld zu erzeugen. Wenn der Strom (V) zurückgefahren wird, wird die Energie wieder freigegeben.

- Es gilt: $U=L\frac {dI}{dt}$
- L ist die Induktivität in Henry [H]
- I Formel

## Lange Kabel/Drähte

Der Wiederstand eines Drahtes kann mit der Formel $R=\rho \frac L A$. Grundsätzlich gillt je Länger und je dünner ein Draht ist, desto höher ist der Wiederstand. Natürlich hängt es auch noch von $\rho$ ($mm^2m^{-1}...$), dem Spezifischer Wierstand, ab.

## Spannungsbänder

Da man im Computer nicht genau 0V oder 5V, definiert man Spannungsbänder, in welcher eine Schaltung einen Input oder Output als 1 oder 0 erkennt.

![](/home/sebi/Documents/zhaw/Current%20Semester/GED/notizen/res/2021-10-27-08-57-35-image.png)