<!-- LTeX: language=de-CH -->

# Aussaglogik

- Sprachliche Sätze sind nicht eindeutig!

T ($\top$) = Tautologie = immer wahr
W ($\bot$)= Wiederspruch = immer falsch

# Was ist eine Aussage

- Ein Satz, welchem ein "wahr" oder "falsch" Wert zugeordnet werden kann

- Darf nicht abhängig von einer freien Variable sein 
  
  - zB. x > 0 ist keine Aussage, da abhängig von x 
  - "alle x, wenn man sie durch 2 teilt, sind gerade", ist eine Aussage, da alle x eingesetzt werden können

- Ein Prädikat wird zu einer Aussage, wenn man die freie Variable bindet (zB. "A(2)")

- Eine Aussage ist ein 0-stelliges Prädikat

# Prädikat

- A(x): einstelliges Prädikat (zB: A(x):="x<3")
- A(x, y): zweistelliges Prädikat (zB. A(x, y):= "x < y")
- Bsp:
  - P(p) := "p is teine Primzahl"
  - Q(x, y) := "wenn x < y, dann gilt x² + 14x - 15 = 0" 

# Junktoren

Verknüpfen Aussagen, um so komplexere Junkoren zu kreieren.

Definitionen: 

- Elementaraussagen: Eine Aussage, die nicht weiter Zerlegt werden kann.
- Zusamengesetzte Aussagen: Aussagen, die aus Elementaraussagen bestehen, die durch Junktoren verknpüft werden

Bsp:

- A := "78 ist keine Primzahl" (Elementaraussage)
- B := "15 ist keine Primzahl" (Elementaraussage)
- C := "78 ist keine Primzahl **und** 15 ist keine Primzahl" (Zusammengesetzte Aussage)

0: falsch = W (Wiederspruch)<br>
1: wahr = T (Tautologie)

## Negation

Negation: $\neg A$

Bsp:

- A:= "Hans studiert an der ZHAW"
- \neg A:= ("Hans studiert nicht an der ZHAW") = "Es trifft nicht zu, dass Hans an der ZHAW studiert."

$\neg$ -> "Es trifft nicht zu"

## Konjunktion (und)

\wedge -> $\wedge$

Beispiel:

- A := "6 ist durch 2 teilbar" -> wahr
- B := "8 ist durch 5 teilbar" -> falsch
- $A \wedge B$: "6 ist durch 2 teilbar **und** 8 ist durch 5 teilbar" -> falsch

| A   | B   | $A \wedge B$ |
| --- | --- | ------------ |
| 0   | 0   | 0            |
| 1   | 0   | 0            |
| 0   | 1   | 0            |
| 1   | 1   | 1            |

## Disjunktion (oder)

\vee -> $\vee$

Beispiel:

- A := "9 ist durch 3 teilbar" -> wahr
- B := "9 ist eine Quadratzahl" -> wahr
- $A \vee \neg B$ = "9 ist durch 3 teilbar oder 9 ist keine Quadratzahl" ->wahr

| A   | B   | $A \vee B$ |
| --- | --- | ---------- |
| 0   | 0   | 0          |
| 0   | 1   | 1          |
| 1   | 0   | 1          |
| 1   | 1   | 1          |

## Implikation (wenn..., dann...)

\Rightarrow -> $\Rightarrow$

Bsp:

- A := "Es regnet"
- B := "Die Wiese ist nass"
- $A \Rightarrow B$ := Wenn es regnet, dann ist die wiese nass"
- "Alle Fische leben im Ozean" => "Haie leben im Ozean" = wahr
- "Alle Fische leben im Ozean" => "Forellen leben im Ozean" = wahr

| A   | B   | $A \Rightarrow B$ | Erklärung                                            |
| --- | --- | ----------------- | ---------------------------------------------------- |
| 0   | 0   | 1                 | Da A, die Bedinungen falsch ist, kann B falsch sein. |
| 0   | 1   | 1                 | Da A falsch ist, kann B aber auch wahr sein.         |
| 1   | 0   | 0                 | Wenn A wahr ist, muss B auch wahr sein               |
| 1   | 1   | 1                 | Wenn A wahr ist, muss B auch wahr sein               |

## Äquivalenz ($\Leftrightarrow$)

Zwei Aussagen sind äquivalenz, wenn gilt:
$A \Rightarrow B \wedge B \Rightarrow A$

| A   | B   | $A \Leftrightarrow B$ |
| --- | --- | --------------------- |
| 0   | 0   | 1                     |
| 0   | 1   | 0                     |
| 1   | 0   | 0                     |
| 1   | 1   | 1                     |

Bsp:

- A(x) := "$x^2=4$"
- B(x) := "x=2"
- in $\mathbb Z: B(x) \Rightarrow A(x)$ -> wahr
- in $\mathbb N: B(x) \Rightarrow A(x)$ -> wahr
- in $\mathbb N: A(x) \Rightarrow B(x)$ -> wahr
- in $\mathbb N: A(x) \Leftrightarrow B(x)$  -> wahr

## Reihenfolge

Reihenfolge der Bildung $\neg$, $\wedge$, $\vee$, $\Rightarrow$, $\Leftrightarrow$

Bsp:

- $((A \vee (B \wedge C)) \Rightarrow D)$
- $(\neg A) \Rightarrow (C \vee ((\neg B) \wedge D))$

## Junktoren Regeln

Mit den folgenden Regeln, kann man Äquivalente-Aussagen umformen

- Doppel Negation: $\neg \neg A \Leftrightarrow A$
- Kummutativtät
  - $A \wedge B \Leftrightarrow B \wedge A$
  - $A \vee B \Leftrightarrow B \vee A$
- Assoziativität: 
  - $(A \wedge B) \wedge C \Leftrightarrow A \wedge (B \wedge C)$
  - $(A \vee B) \vee C \Leftrightarrow A \vee (B \vee C)$
- Distributivität: 
  - $A \wedge (B \vee C) \Leftrightarrow (A \wedge B) \vee (A \wedge C)$
  - $A \vee (B \wedge C) \Leftrightarrow (A \vee B) \wedge (A \vee C)$
  - $(A \wedge B) \vee (C \wedge D) \Leftrightarrow ((A \wedge B) \vee C) \wedge ((A \wedge B) \vee D) \Leftrightarrow (A \vee C) \wedge (B \vee C) \wedge (A \vee D) \wedge (B \vee D)$
  - als vergleich: $A \cdot (B + C) = A \cdot B + A \cdot C$
- Regeln von de Morgan:
  - $\neg(A\vee B) \Leftrightarrow \neg A \wedge \neg B$
  - $\neg(A\wedge B) \Leftrightarrow \neg A \vee \neg B$
- Implikation:
  - $A \Rightarrow B \Leftrightarrow \neg A \vee B$
- Kontraposition
  - $A \Rightarrow B \Leftrightarrow \neg B \Rightarrow \neg A$
- Äquivalenz
  - $(A \Leftrightarrow B) \Leftrightarrow (A \Rightarrow B) \wedge (B \Rightarrow A) \Leftrightarrow (\neg A \vee B) \wedge (\neg B \vee A)$
- Indepotenz:
  - $A \vee A \Leftrightarrow A$
  - $A \wedge A \Leftrightarrow A$
- ausgeschlossene Dritte:
  - $A \vee \neg A \Leftrightarrow T$
  - $A \wedge \neg A \Leftrightarrow W$
- Identität:
  - $A \vee T \Leftrightarrow T$
  - $A \wedge T \Leftrightarrow A$
  - $A \vee F \Leftrightarrow A$
  - $A \wedge F \Leftrightarrow F$

Beweiss, dass $(A \Rightarrow B) \Leftrightarrow (\neg B \Leftrightarrow \neg A)$  ist

- $A \Rightarrow B$
- $\Leftrightarrow \neg A \vee B$
- $\Leftrightarrow \neg \neg (\neg A \vee B)$
- $\Leftrightarrow \neg (\neg \neg A \wedge \neg B)$
- $\Leftrightarrow \neg (A \wedge \neg B)$
- $\Leftrightarrow \neg A \vee \neg \neg B$
- $\Leftrightarrow \neg \neg B \vee \neg A$
- $\Leftrightarrow \neg (\neg B) \vee (\neg A)$
- $\Leftrightarrow \neg B \Leftrightarrow \neg A$

Bsp:

- $A \Rightarrow B$ -> Wenn es regnet, ist die Wiese nass

- $\neg B \Rightarrow \neg A$ -> Wenn die Wiese nicht nass ist, regnet es nicht

- $\neg (A \Rightarrow B)$

- $\neg (A \Rightarrow B)$ 

- $\neg (\neg A \vee B)$ 

- $\neg \neg A \wedge \neg B$ 

- $A \wedge \neg B$ 

Implikations-Wahrheitstabelle:

| A   | B   | $A \Rightarrow B$ | $\neg A \vee B$ |
| --- | --- | ----------------- | --------------- |
| 0   | 0   | 1                 | 1               |
| 0   | 1   | 1                 | 1               |
| 1   | 0   | 0                 | 0               |
| 1   | 1   | 1                 | 1               |

# Quantore

Motivation: Übergang von Prädikat zu Aussage zu formulieren

- P(X) := "x ist eine natürliche Zahl" => Prädikat

- P(5) := "5 ist eine natürliche Zahl" => Aussage (wahr)

- "Es gibt mindestens eine $x \in \mathbb{Z}$, so dass P(x) gilt" => Aussage

- "Für alle $x \in \mathbb{Z}$ gillt P(x)" => Aussage

## Liste von Quantoren

| Zeichen   | Name            | Beschreibung         |
| --------- | --------------- | -------------------- |
| $\forall$ | Allquantor      | Für alle             |
| $\exists$ | Existenzquantor | "für mindestens ein" |

Beispiele

| Beispiel               | gesprochen                           | Erklärung                                                     |
| ---------------------- | ------------------------------------ | ------------------------------------------------------------- |
| $\forall x A(x)$       | Für alle x gilt A(x)                 | Alle x in dem Prädikat, werden auf alle Zahlen gebunden       |
| $\forall x \in M A(x)$ | Für alle x aus M gillt A(x)          | Alle x in dem Prädikat, werden auf alle Werte von M gebunden  |
| $\exists x A(x)$       | Es gibt (mind.) ein x mit A(x)       | Es gibt mindestens eine Zahl, bei welcher A(x) zutrifft       |
| $\exists x \in M A(x)$ | Es gibt (mind.) ein x aus M miz A(x) | Es gibt mindestes einen Wert von M, bei welcher A(x) zutrifft |

Jeder Quantor bindet eine Variable

Umformungen:

- $\forall x \in I B(x) \Leftrightarrow \forall x (x \in I \Rightarrow B(x))$
- Klammern
  - Quantoren binden stärker als Junktoren
  - $\forall x \in \mathbb M B(x) \wedge C(x) \Leftrightarrow (\forall x \in \mathbb M B(x)) \wedge C(x)$
- Abkürzungen
  - $\forall x \in \mathbb M (\forall y \in \mathbb M A(x, y)) \Leftrightarrow \forall x,y \in \mathbb M A(x, y)$
  - $\exists x \in \mathbb M (\exists y \in \mathbb M A(x, y)) \Leftrightarrow \forall x,y \in \mathbb M A(x, y)$
  - Falls die Menge aus dem Kontext klar ist, können wir schreiben:
    - $\forall x A(x)$ (ohne $\in \mathbb M$)
    - $\exists x A(x)$ (ohne $\in \mathbb M$)
- Negation:
  - $\neg \exists x \in M A(x) \Leftrightarrow \forall x \in M \neg A(x)$
  - $\neg \forall x \in M A(x) \Leftrightarrow \exists x \in M \neg A(x)$
  - $\forall x A(x) \Leftrightarrow \neg \exist x \neg A(x)$
- Distributiv-Gesetzt
  - **Keine Distributiv-Gesetzt mit Quantoren und Junktoren**
  - Beispiel
    - A(x) := "x ist eine gerade natürliche Zahl"
    - B(x) := "x ist eine ungerade natürliche Zahl"
    - $\forall x A(x) \vee B(x) \Leftrightarrow W \nLeftrightarrow \forall x (A(x) \vee B(x)) \Leftrightarrow T$
  - $\exists x (A(x) \wedge B(x)) \nLeftrightarrow \exists x A(x) \wedge \exists x B(x)$
  - $\exists x (A(x) \vee B(x)) \nLeftrightarrow \exists x A(x) \vee \exists x B(x)$
- Reihenfolge von Quantoren:
  - $P(x, y) := x + y = 17$
  - $\forall x \in \mathbb Z (\exists x \in \mathbb Z P(x, y)) : wahr$
  - $\exists x \in \mathbb Z (\forall x \in \mathbb Z P(x, y)): falsc h$

Beispiel:

- A(x, y) := "x < y" -> 2-stelliges Prädikat, frei: x, y
- $\forall x \in \mathbb{R} A(x, y)$ : 1-stelliges Prädikat, frei: x

## Übungungen Quantoren

2)<br>

- a) $\exists x P(x) \wedge \forall y,z (P(y) \wedge P(z) \Rightarrow y = z)$
- b) $\exists y,z (P(y) \wedge P(z) \wedge y \neq z)$
- c) $\neg (\exists x,y (P(x) \wedge P(y) \wedge x \neq y)) -> negation von b)$
- d) $\forall x, y (P(x) \wedge P(y) \Rightarrow Q(x, y))$
- e) $\neg(\exists x Q(x, x)) \Leftrightarrow \forall x (\neg Q(x, x))$
  - $\neg(\forall x Q(x, x))$ -> das wäre: "nicht alle x sind Q(x, x)", aber eines x, bei welchem Q(x, x) stimmt, wäre ok

3)<br>

- a) Alle Prüfungen sind einfach $\Leftrightarrow \forall x \in P E(x)$
- b) Eine Prüfung ist einfach $\Leftrightarrow \exists x \in P E(x)$
- c) Keine Prüfung ist einfach $\Leftrightarrow \neg \exists x \in P E(x)$
- d) Alle Prüfungen sind einfach $\Leftrightarrow \forall x \in P (\neg E(x))$
- e) Nur eine Prüfung ist einfach $\Leftrightarrow (\exist x \in P E(x)) \wedge \forall y,z \in P (E(y) \wedge E(z))$
- f) Nur eine Prüfung ist nicht einfach $\Leftrightarrow (\exist x \in P \neg E(x)) \wedge \forall y,z \in P (\neg E(y) \wedge \neg E(z))$
- g) Nicht alle Prüfung sind einfach $\Leftrightarrow \neg \forall x \in P E(x)$
- h) Eine Prüfung ist nicht einfach $\Leftrightarrow \exists x \in P \neg E(x)$
- g) und h) sind äquivalent

# Beweisstechnik

- $\forall$ : 
  - wahr: für alle Elemente aus der Grundmenge
    - Verallgemeinern mit Variablen
  - falsch: Ein Element, bei dem es nicht funktioniert
- $\exists$
  - wahr: Ein Element finden, bei dem es stimmt
  - falsch: Alle Elemente aus der Grundmenge allgemein zeigen, dass das Prädikat nicht gilt

## Direkten Beweis

- Implikation
  - zu zeigen
    - $\forall x,y \in \mathbb N (\text{x ist gerade} \wedge \text{y ist gerade} \Rightarrow x\cdot y \text{ ist gerade})$
    - $\Leftrightarrow \forall x,y \in \mathbb N \exists n_x,n_y,n_z \in \mathbb N (x = 2 \cdot n_x \wedge y = 2\cdot n_y \Rightarrow x\cdot y = 2\cdot n_z)$
  - Beweise:
    - A: wahr $(x=2n_x \wedge y=2n_y) = T \text{  } n_x,n_y \in \mathbb N$
    - B: wahr $(x\cdot y = 2n_z) = T$
    - $A \Rightarrow B: x \cdot y = 2n_x \cdot 2n_y = 2(2n_xn_y) = 2n_z$

## Beweis durch Widerspruch

Anstatt zu zeigen, dass die Aussage A immer wahr ist, wird bewiessen, dass A niemals falsch ist.

- zu beweisen:
  - $A:= \text{"Es gibt keine grösste natürliche zahl"} = \neg \exists n \in \mathbb N G(n)$
  - $G(x) := \text{"x ist grösste Zahl"}$
  - $\neg A := \text{"Es gibt mindestens eine grösste natürliche Zahl"} = \exists n \in \mathbb N G(n)$
- Beweis:
  - Annahme: n ist grösste natürliche Zahl
  - Jedoch für jede natürliche Zahl n, existiert n + 1
  - Daher ist n+1 > n und n ist nicht die grösste Zahl
  - $\Rightarrow \neg A = W \Rightarrow A = T$

## Beweis durch (Gegen-) Beispiel

- zu beweisen
  - "Nicht jede natürliche Zahl ist eine Quadratzahl"
  - $A:= \neg\forall n \in \mathbb N Q(n)\Leftrightarrow \exists n \in \mathbb N \neg Q(n)$
  - $Q(x)=\text{x ist Quadradzahl} )$
- Beweis:
  - $n = 7$, denn $f(x)=x^2$ mit $f(x) \in \mathbb N$
  - in diesem Fall würde 7 niemals als Funktionswert für f(x) herausgekommen, da $2\cdot 2 < 7 < 3 \cdot 3$
  - $\Rightarrow$ 7 ist keine Quadratzahl
  - $\Rightarrow$ A ist wahr

## Beweis durch Kontraposition

Es gillt die Aussage von der Form $A \Rightarrow B \Leftrightarrow \neg B \Rightarrow \neg A$

Beispiel:

- zu beweisen:
  - $\forall n \in \mathbb N ((n^2 + 1 = 1) \Rightarrow (n = 0))$
- anstatt dies, beweissen wir
  - $\Leftrightarrow \forall n \in \mathbb N (\neg (n = 0) \Rightarrow \neg(n^2 + 1 = 1))$
  - $\Leftrightarrow \forall n \in \mathbb N (n \neq 0 \Rightarrow n^2 + 1 \neq 1))$
- Beweis:
  - Wenn $n \neq 0 \Rightarrow n^2\neq 0 \Rightarrow n^2 + m \neq m$ 
  - Für $m=1 \Rightarrow n^2 + 1 \neq 1$ 
  - $\Rightarrow \forall n \in \mathbb N ((n \neq 0) \Rightarrow (n^2 + 1 \neq 1)) : T$

## Äquivalenz

Um eine Äquivalenz zu beweissen muss $A \Rightarrow B \wedge B \Rightarrow A$

Beispiel:

- $B \Rightarrow A: \forall n \in \mathbb N ((n = 0) \Rightarrow (n^2+1=1))$
- $n=0$  (wenn n=0 wahr ist, dann muss auch die nächste Linie wahr sein)
- $n^2+1=0^2 + 1 = 1$ (was sie ist)
- und da $A \Rightarrow B$ und $B \Rightarrow A$ wahr waren, ist auch $A \Leftrightarrow B$ wahr

Biespiel #2:

- zu zeigen:
  - $\forall n \in \mathbb N \exists k,j \in \mathbb N ((n = 2k) \Leftrightarrow n^2=2j)$
  - bzw. $\forall n \in \mathbb N \exists k,j \in N (n = 2k \Rightarrow n^2 = j2) \wedge (n^2 = 2j \Rightarrow n = 2k)$
- Beweis:
  1. $A(n) \Rightarrow B(n)$
  - n = 2k : wahr
  - $n^2=(2k)^2$