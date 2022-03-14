# Vektoren

> **Vektor**
> Ein Vektor wird durch seine Richtung und Betrag definiert (**Nicht aber der Ort**)
>
> **Nullvektor**
> Ein Nullvektor $\vec 0$ hat den Betrag `0` und hat keine Richtung
>
> **Einheitsvektor/normierter Vektor**
> Ein Vektor $\vec e$ oder $\vec e_a$, welchen der Betrag `1` hat und kann folgendermassen berechnet werden: $\vec e_a=\frac{\vec a}{\vert a \vert}$
>
> **Gegenvektor**
> Der Gegenvektor zum Vektor $\vec a$ ist $-\vec a$. Es ist also ein Vektor welcher parallel zu $\vec a$ ist, denselben Betrag hat, aber in die entgegengesetzte Richtung zeigt.

## Addition

Wenn zwei Vektoren addiert werden, werden sie graphisch aneinander gehängt.

Diese Operation ist kommutativ und assoziativ:![image-20220312200815706](res/image-20220312200815706.png)

## Skalare Multiplikation

Wenn ein Vektor mit einer Zahl multipliziert wird, wird der Vektor gestreckt, bzw. geschrumpft. Oft wird der Faktor als griechischen Buchstaben ausgedrückt, um Verwechslung zwischen Vektoren und Faktoren zu vermeiden.

## Linearkombination

Eine Linearkombination ist das kombinieren von mehreren skallierten Vektoren:
$$
\lambda_1\cdot\vec a_1+\lambda_2\cdot\vec a_2+...+\lambda_n\cdot\vec a_n
$$

## Kollinear

![image-20220312201313995](res/image-20220312201313995.png)

Zwei Vektoren sind kollinear, wenn es eine Gerade gibt, zu der beide parallel sind. Mathematisch kann dies als $\vec a = \lambda\cdot\vec b$ ausgedrückt werden

## Komplanar

Drei Vektoren heissen komplanar, wenn es eine Ebene gibt, zu der alle drei parallel sind.

![image-20220312215110578](res/image-20220312215110578.png)

## Satz 1

Es lässt sich der Vektor $\vec c$ als Linearkombination der Vektoren $\vec a$ und $\vec b$ im 2D-Raum darstellen, wenn

* $\vec a$, $\vec b$ und $\vec c$ komplanar zueinander sind
* $\vec a$ und $\vec b$ nicht kollinear sind

## Satz 2

Wen drei Vektoren $\vec a$, $\vec b$ und $\vec c$ nicht komplanar sins, lässt sich jeder Vektor $\vec d$ in $\R^3$ als eine Linearkombination von $\vec a$, $\vec b$ und $\vec c$ darstellen