# Generel

- Das Zusammen-Rechnen kann auch als Summenzeichen: $\sum^{n}_{i=0}(a_i\cdot b^i)$

# Binär

- Abekürzungen:
  - 0b0010 0000
  - 0B0010 0000
  - $0010'0000_b$

# Hexadezimal

- Abkürzungen:
  - $AF3C_h$
  - AF3Ch (<- h am Ende anfügen)
  - 0xAF3C

# Umrechnen

- Achtung von welcher Richtung man den Rest liest

TODO

1. $\frac{a_n\cdot b^n + a_2\cdot b^2+a_1\cdot b^1+a_0}{b}$
2. 

Beispiel:

1. $1000_d:16_d = 62_d R8_d=8_h$
2. $62_d : 16_d = 3_d R 14_d=E_h$
3. $3_d : 16d = 0_d R 3_d=3_h$
4. $\text{Daraus gibt es von unten nach oben gelesen: } 3E8_h=1000_d$

Beispiel #2:

- $26.6875_d = binar$
- Man beginnt nur mit der ganz Zahl, also 26
1. $26_d : 2_d = 13_d R0$
2. $13_d : 2_d = 6_d R1$
3. $6_d : 2_d = 3_d R0$
4. $3_d : 2_d = 1_d R1$
5. $1_d : 2_d = 0_d R1$
- Von unten nach oben gelesen gibt dies: $11010_b$
- Nun noch $0.6875_d$
1. $0.6875_d \cdot 2 = 0.375 + 1$
2. $0.374 \cdot 2 = 0.75 + 0$
3. $0.75 * 2 = 0.5 + 1$
4. $0.5 * 2 = 0 + 2$
- Nun von oben nach unten lesen: $1011_b$
- Zusammen: $11010.1011_b$

# Addition & Subtraktion

- Wie Schriftliches-Addieren
- Bei Hexadezimal darauf denken, dass der Übertrag im Hexadezimal-System ist. Heisst eine 1 beim Übertrag von der Einerstelle ist 16

# Ziffern verschieben

Wenn man eine 0 anhänkt, rechnet man Mal die Basis. 
Als Beispiel: $12 \cdot 10 = 120$ oder $10b\cdot2_d=100_b$

# Multiplikaton

Beim Binär (oder auch andre Zahlensystem) multiplizeren, wird jede einzelne Stelle mit der ganzen anderen Zahlen multipliziert und die Ergebnisse addiert. Dies funktioniert im Zehnersystem, wie auch in Binär.

Beispiel:

<pre>
101 x 1110
  1 x 1110 =   1110
 0  x 1110 =  0000
1   x 1110 = 1110
            1000110
</pre>

# Dividieren

<pre>
 6   : 5   = 1.2
 110 : 101 = 1.0001
-         (hat 1x platz -> 1.)
 001
  010      (ein 0 wird hinzugefügt)      
  0100     (da 101 nicht in 100 hineinpasst, wird ein weiteres 0 hinzugefügt -> 1.0)
  01000    (ein weiteres 0 wird hinzugefügt -> 1.00)
   -101    (jetzt kann 101 abgezogen werden -> 1.001)
    011
</pre>

Dieses Spiel könnte man nun wiederholen bis in alle Ewigkeit, da 1.2 sich nicht als binär oder hexadezimal Zahle lässt.

# Minuszahlen

## Zweier-Komplement