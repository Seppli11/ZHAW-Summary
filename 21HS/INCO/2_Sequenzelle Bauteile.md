Software zur Simulierng: https://kra.lc/projects/jdigitalsimulator/download.html

# D-Flip-Flop

- 1bit Speicher
- hat 3 Eingäge
  - Clock (C)
  - Eingang (D)
  - Ausgang (Q)

Wenn C von niedrig zu hoch geht (steigende Flanke), wird D gelesen und gespeichert. Der gespeicherte Wert wird auf Q ausgegeben

Beispiele:

- Wenn D hoch ist und C steigt, dann wird ein 1 gespeichert.
- Wenn D tief ist und C **steigt**, dann wird ein 0 gespeichert
- Wenn D hoch oder tief ist, aber C nicht steigt, dann passiert nichts

Fakten:

- n Flip-Flop können $2^n$ Zustände speichern
- Periode T = T0 + T1 [s]
  - T0 = Periode, in welcher das Signal 0 ist
  - T1 = Periode, in welcher das Signal 1 ist
- Frequenz f = 1/T [HZ]
- Duty Cycle = T1/T = Wie viel Prozent das Signal auf 1 ist

## Beispiel: Frequenzteiler

*Bilder einfügen*

## Generelle Form

*Bild von Folien einfügen*

Typsiche Anwendungen

- Counter
- ... (von Folien)

# Finit State Machine

# Shift Register

# Paralleles Register

# Zustands-Automaten

*Zustands Tabelle einfügen*