# Vektorräume

[TOC]



Ein Vektorraum ist eine Menge $V$ mit den Funktionen Addition und Skalar-Multiplikation: 
$$
+:V \times V \rightarrow V\\
\cdot : \R \times V \rightarrow V
$$
Dabei müssen folgende Gesetze existieren:

* Kommutativgesetz: $a + b = b + a$
* Assoziativgesetzt: $a + (b + c)=(a + b) + c$
* Es gibt ein neutrales Element $\vec 0$, für welches gilt $a + 0v = \vec a$ und $0v \in V$
* Für jedes Element $a \in V$ muss es ein inverses Element $-a \in V$ geben, so dass $a + (-a) = 0v$ ergibt.
* Assoziativgesetzt: $\lambda \cdot (\mu \cdot a) = (\lambda \cdot \mu) \cdot a$
* Distributivgesetzt: $\lambda \cdot(a + b) = \lambda \cdot a + \lambda \cdot b$
* Distirbutgesetzt: $(\lambda + \mu)\cdot a = \lambda \cdot a + \mu \cdot a$
* Für jedes Element $a \in V$ gibt es ein neutrales Element $1\cdot a = a$,

**Frage:** muss das Skalar über $\R$ erstellt werden oder könnte auch eine andere Menge genommen werden.

## Reeler Vektoraum

$$
+:V \times V \to V: (\vec a; \vec b) \mapsto \vec a + \vec b\\
\cdot : \R \times V \to V : (\lambda; \vec a) \mapsto \lambda \cdot \vec a
$$

Das neutrale Element bei der Addition ist der Nullvektor $\vec 0$ und das neutrale Element bei der Skalarmultiplikation ist $1$.

## Unterräume

Eine Teilmenge $U$ eines Vektorraums $V$ heisst Unterraum von $V$, wenn $U$ selbst auch ein Vektorraum ist. Dafür müssen folgende Kriterien erfüllt sein:

* Für beliebige Element $a, b \in U$ ist auch $a+b\in U$
* Für jeden Skalar $\lambda \in \R$ und jedes Element $a\in U$ ist auch $\lambda \cdot a\in U$
* Die neutralen Elemente der Addition und Skalarmultiplikation müssen ebenfalls in $U$ sein.

## Linearer Spann

$spann(\vec a_1, \vec a_2, ..., \vec a_n)$ ist definiert als alle möglichen Vektoren von der Linearkombination $\lambda_1\cdot \vec a_1 + \lambda_2\cdot \vec a_2 +...+\lambda_n\cdot \vec a_n$§

Die Vektoren $\vec a_1, \vec a_2, ...\vec a_n$ *spannen* den linearen Spann auf und formen eine geometrische Form.

| in $\r^2$ |      |
| --------- | ---- |
|           |      |
|           |      |
|           |      |



## Basis und Dimensionen

## Erzeugendensystem

Eine Menge von Vektoren $\{\vec b_1, \vec b_2, ..., \vec b_N\}$ bildet ein Erzeugendensystsem von $V$, falls $V=span(\vec b_1, \vec b_2, ..., \vec b_n)$. Dies ist nur der Fall, wenn die $\vec b_i$ Vektoren linear unabhängig sind.

Aus dem gehen die folgenden folgende Bedingungen:
$$
\begin{align}
& V=span(\vec b_1, \vec b_2, ..., \vec b_n)\\
\Leftrightarrow & B\cdot \vec x = \vec a \text {für jedes } \vec a \in \R^m\\
\Leftrightarrow & rg(B)=m
\end{align}
$$
