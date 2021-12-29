# Natürliche Zahlen

[TOC]

- Jede natürliche Zahl plus 1 ergibt die nächste natürliche Zahl
- Die Zahl 0 hat als einzige natürliche Zahl keinen Vorgänger
- Jede natürliche Zahl ist Nachfolger von höchstens einer natürlichen Zahl

## Volständige Induktion

> Idee: Beweissen, dass ein Vorgang für das 1. Element und für das n-te Element gillt. Wenn dies gegeben ist, dann wird es auch für das n+1-te Element gellten

Um dies zu tun, werden folgende Schritte getan

1. Induktionsverankerung *(IV)*
   E(0): wahr

2. Induktionsschritt *(IS)*
   Wenn E(n) wahr, dann gillt auch E(n+1)  oder $E(n) \Rightarrow E(n+1)$

Dies kann man normalerweissen in folgende Schritte weiter unterteilen:

1. Induktionsverankerung (IV)
   Man beweist, dass E(0) wahr ist. Hier kann man einfach einsetzen

2. Induktionsanhame (IA)
   Man schreibt auf, was man für E(n) erwartet. Dies ist eine Annahme und muss nicht in diesem Schritt bewiesen werden

3. Induktionsbehauptung (IB)
   Man behauptet, wie sich E() für E(n+1) verhaltet

4. Induktionschluss (IS)
   Man beweisst, dass wenn es für E(n) gilt, dann gilt es auch für E(n+1)

## Methode des kleinsten Verbrechers

## Rekursion

> Für eine Rekursion wird das erste Glied angegeben, und wie man von diesem zum nächsten kommt
> 
> Also: 
> F(0) = ...
> F(n+1)=...(n+1)...

### Darstellungsmöglichkeiten

Es gibt drei möglichkeiten solche Reihen darzustellen:

1. Aufzählend - die Werte der Reihe aufgezählt (
   Beispiel: 2, 4, 8, ...

2. Rekursiv
   Als Rekusirve Funktion
   Beispiel: $F(0)=2; F(n+1)=2\cdot F(n)$

3. Explitzit
   Als Funktion, welche nicht sich selbst bentützt
   Beispiel: $F(n)=2^n+1$

Mit Hilfe einer vollständigen Indukation kann man beweissen, dass die rekursive und explizite Form dasselbe darstellt.
