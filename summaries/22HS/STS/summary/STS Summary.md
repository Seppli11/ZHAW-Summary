---
title: "STS Summary"
tags:
- summary
- STS
---

# STS Summary

## Deskriptive Statistik

<img src="res/STS Summary/image-20221227170300247.png" alt="image-20221227170300247" style="zoom:50%;" />

| Funktion                                            | Nicht Klassiert                                              | Klassiert                                                    |
| --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| absolute Häuffigkeit $h(x)$                         |                                                              |                                                              |
| relative Häuffikeit (PMF) $f(x)$ / $g(x)$           | $f(x)=\frac{h(x)}n$                                          | $g(x)=f_i$                                                   |
| Dichtefunktion $f(x)$ ($b_i=$ Klassengrösse ) (PDF) | -                                                            | $f(x)=\frac{g(x)}{b_i}$                                      |
| kummulative absolute Häuffigkeit $H(x)$             | $H(x)=\sum_{a_i \lt x}h_i$                                   | -                                                            |
| kummulative relative Häuffigkeit (CDF) $F(x)$       | $F(x)=\sum_{a_i}f_i=\frac{H(x)}{n}$                          | $F(x)=\int^x_{-\infty}f(y)\mathrm d y$, $F(x)=F(a_i)+\frac{x-a_i}{a_{i+1}-a_i}\cdot (F(a_{i+1})-F(a_i))$ |
| Modus $x_{mod}$                                     | Höchste absolute Häufigkeit                                  | *gleich*                                                     |
| Klassenmitte $M_i$                                  | -                                                            | $M_i=\frac{a_{i+1}-a_i}{2}$                                  |
| Stichprobenmittelwert $\overline x$                 | $\overline x=\frac 1 n\sum^n_{i=1}x_i$                       | $\overline x=\sum^n_{i=1}M_i\cdot f_i$                       |
| Varianz                                             | $s^2 = \frac 1 n \sum^n_{i=1}(x_i - \overline x)^2 \\ = \frac 1 n \left (\sum^n_{i=1}x_i^2 \right)- \overline x ^2$ | $s^2=\sum^n_{i=1}(M_i-\overline x)^2\cdot f_i$               |
| Korrigierte Varianz                                 | $s_{korr}^2=\frac 1 {n-11}\sum^n_{i=1}(x_i - \overline x)^2 \\ = \frac n {n - 1}s^2$ | $s_{korr}^2= \frac n {n - 1}s^2$                             |
| (korrigierte) Standardabweichung $s$                | $s=\sqrt{s^2}$                                               | *gleich*                                                     |
| Kovarianz                                           | $s_{xy}=\frac 1 n \sum^n_{i=1}(x_i-\overline x)\cdot (y_i- \overline y)$ |                                                              |

### Quantile / Boxplot

$$
\text{Nicht klassiert:}\\
R_q=\begin{cases}
\frac{x_{[n \cdot q]}+x_{[n\cdot q + 1]}}{2} & n \cdot q \text{ ganze Zahl}\\
x_{[\lceil n\cdot q\rceil]} & n\cdot q \text{ keine ganze Zahl}
\end{cases}\\\\
\text{klassiert:}\\
R_q=\frac{b - a}{F(b) - F(a)}\cdot (q - F(a)) + a
$$

<img src="res/STS Summary/image-20221227175055023.png" alt="image-20221227175055023" style="zoom:50%;" />

## Pearson-Korrelationskoeffizient

$$
r_{xy}=\frac{S_{xy}}{S_x\cdot S_y}
$$

|                    |                                                              |
| ------------------ | ------------------------------------------------------------ |
| $r_{xy}\approx 1$  | Positiver Linearer Zusammenhang                              |
| $r_{xy}\approx -1$ | Negatiber Linearer Zusammenhang                              |
| $r_{xy}\approx 0$  | Punkte sind gleichmässig um den Schwerpunkt $(\overline x, \overline y)$ verteilt |

Der Pearon-Korrelationskoeffizient ist **nicht** robust und kann von Ausreisser stark beeinflusst werden.

## Spearman-Rangkorrelationskoeffizient

$$
r_{Sp}=\frac{\sum^n_{i=1}(\rg(x_i) - \overline{\rg(x)})\cdot(\rg(y_i)-\overline{\rg(y)})}
{\sqrt{\sum^n_{i=1}(\rg(x_i) - \overline{\rg(x)})^2} \cdot \sqrt{\sum^n_{i=1}(\rg(y_i) - \overline{\rg(y)})^2}}\\
\rg(x_i)=1+Anzahl(j \vert x_j < x_i) + \frac 1 2 Anzahl(j | x_j = x_i, i \neq j)
$$

Deutsch: 1 + die Anzahl von Elementen $x_j$, welche kleiner als $x_i$ sind + die halbe Anzahl von Elementen, welche gleich sind, wie $x_i$.

Wenn es doppelte x- oder y-Elemente gibt, dann wird von verbundenen Rängen gesprochen, wobei der Durchschnitt der Ränge berechnet wird.

Der Spearman-Rangkorrelationskoeffizient misst, ob die Daten eine Korrelation mit einer strengen monotoner funktion haben (eine Funktion, welche immer steigt oder fällt)

**TODO: Multivarianten Daten darstellen**

## Kombinatorik

Binomialkoeffizient: $\begin{pmatrix}n \\k \end{pmatrix}=\frac{n!}{(n-k)!\cdot k!}$
Wieviel Möglichkeiten gibt es $k$ Objekte von $n$ Objekten auszuwählen

$n$ sind die Anzahl Optionen, $k$ wie oft gezogen wird

![image-20221228103228852](res/STS Summary/image-20221228103228852.png)

Kombination mit Wiederholung: $k$ Objekte aus $n$ möglchen Sorten/Töpfen

Beispiele:

* Anzahl Möglichenkeiten für eine Personengruppe mit 20 potentiellen Personen: $2^{20}-1$
  Jede Person ist entweder in der Gruppe oder nicht und $-1$ wegen der Leeren-Menge

## Wahrscheinlichkeit

$$
\text{Zähldichte: } \rho: \Omega \to [0, 1]\\
\text{Wahrscheinlichkeitsmass: } P: 2^\Omega \to [0, 1], P(M)=\sum_{\omega \in M} \rho(\omega)
$$

Der Wahrscheinlichkeitsraum $(\Omega, P)$ wird Laplace-Raum genannt, wenn alle Ereignisse gleichwahrscheinlich sind.

**TODO:  geometrische Reihe**

* $P(X=x)=f(x)$
* $P(X \le x)=F(x)$
* $P(a \le X \le b)=P(X\le b)-P(X\le a)$
* $P(X > x)=1-P(X\le x)$

### Kenngrössen

*Lagemass*: Was ist das Zentrum
*Streumass*: Die Verteilung des Merkmals

* Erwartungswert $E(X)=\sum_{x\in\R}P(X=x)\cdot x$
  * $E(X+Y)=E(X)+E(Y)$ und $E(\alpha X) = \alpha E(X)$
* Varianz
   $V(X)=E(X^2)-(E(X))^2 = E((X-E(X)^2)=\\(\sum_{x\in\R}P(X=x)\cdot x^2)-E(X)^2=\sum_{x\in\R}P(X=x)\cdot(x-E(X))^2$

### Bedingte Wahrscheinlichkeit

* Eintreten von $B$, wenn $A$ eingetroffen ist (Satz von Bayes): $P(B\vert A) = \frac{P(A\cap B)}{P(A)}=\frac{P(A\vert B)\cdot P(B)}{P(A)}$
* Multiplikationssatz: $P(A\cap B)=P(A\vert B)\cdot P(B)=P(B\vert A)\cdot P(A)$
* Satz von der Totalen Wahrscheinlichkeit: $P(A)=P(A\vert B)\cdot P(B) + P(A|\overline B)\cdot P(\overline B)$

![image-20221228215218524](res/STS Summary/image-20221228215218524.png)

#### Vierfeldertafel

![image-20221228221126638](res/STS Summary/image-20221228221126638.png)

Die Ereignisse in einer Vierfeldertafel **müssen** Disjunkt sein.

### Stochastische Unabhängigkeit

Zwei Ereignisse $A$ und $B$ sind stochastisch unabhängig, wenn gilt $P(A\cap B)=P(A)\cdot P(B)$.

Wenn $A$ und $B$ stochastisch unabhänig sind:

*  sind auch $\overline A$ und $\overline B$, wie $\overline A$ mit $B$ und $A$ mit $\overline B$ unabhängig
* gilt $P(A\vert B)=P(A)$ und $P(B\vert A)=P(B)$
* gilt $E(X\cdot Y)=E(X)\cdot E(Y)$ und $V(X+Y)=V(X) + V(Y)$

Um zu überprüfen ob $n$ Ereignisse unabhänig sind, braucht es $2^n - n -1$ Gleichungen, da sie disjunkt unabhängig sein müssen.

## Spezielle Verteilungen

![image-20221228225108803](res/STS Summary/image-20221228225108803.png)

![image-20221228232507576](res/STS Summary/image-20221228232507576.png)

### Hypergeometrische Verteilung ($X \sim H(N, M, n)$)

Es gibt eine Urne mit $N$ Objekte, von welchen $M$ einer bestimmten Sorte angehöhren ($N- M$ gehöhren zu anderen Sorten). Zufällig wird eine Stichprobe von $n$ Objekten aus der Urne genommen. Wichtig ist, dass **nicht Zurückgelegt wird**.

Die Zufallsvariable $X$ beschriebt die Anzahl von Objekten von der Sorte $M$. Es gilt $X \sim H(N, M, n)$
$$
P(X=x)=\frac{\begin{pmatrix}M\\x\end{pmatrix}\cdot \begin{pmatrix}N - M\\n - x\end{pmatrix}}
{\begin{pmatrix}N\\n\end{pmatrix}}\\
$$

$$
\begin{align}
\mu=E(X)&=n\cdot \frac M N\\
\sigma^2=V(X)&=n\cdot \frac M N \cdot (1 - \frac M N) \cdot \frac{N - n}{N - 1}\\
\sigma = S(X)&=\sqrt{n\cdot \frac M N \cdot (1 - \frac M N) \cdot \frac{N - n}{N - 1}}
\end{align}
$$

### Bernoulliverteilung

Ein Bernoulli-Expermient, ist ein Zufallsexperiment, inwelchem es nur zwei Möglichkeiten gibt.
$$
\begin{align}
P(X=1)&=p\\
P(X=0)&=1-p=q\\
\end{align}
$$

$$
\begin{align}
E(X)&= P(X=1)=p\\
E(X^2)&= P(X=1) = p\\
V(X)&=E(X^2)-(E(X))^2=p - p^2
\end{align}
$$

### Binomailverteilung ($X\sim B(n, p)$)

Wenn ein Bernoulliexperiment $n$-mal wiederholt wird und die Wahrscheinlichkeit für $P(X=1)=p$ ist und $q=1-p$. Die Wiederholungen **müssen** stochastisch unabhängig sein. 

Es gilt $X\sim B(n, p)$
$$
P(X=x)=\begin{pmatrix}n\\x\end{pmatrix}\cdot p^x\cdot q^{n-x}
$$

$$
\begin{align}
\mu=E(X)&=np\\
\sigma^2=V(X)&=npq\\
\sigma = S(X)&=\sqrt{npq}
\end{align}
$$

Wenn gilt $n \lesssim \frac N {20}$, dann kann die eine hypergeometrische Verteilung mit einer Binomialverteilung angenähert werden: $H(N, M, n)\approx B(n, \frac M N)$

### Poissonverteilung ($X\sim P(\lambda)$)

Die Poissonverteilung kann als stochastisches Modell benutzt werden, wenn es um die Wahrscheinlichkeit für das Eintreten einer bestimmten Anzahl gleichartiger Ereignisse geht, welche in einem gegebenen Bereich $\lambda$ (unabhängigi voneiner) beliebig oft auftreten können.
$$
P(X=x)=\frac{\lambda^x}{x!}\cdot e^{-\lambda}
$$

$$
\begin{align}
\mu=E(X)&=\lambda\\
\sigma^2=V(X)&=\lambda\\
\sigma = S(X)&=\sqrt{\lambda}
\end{align}
$$

Für eine Binomialverteilung wenn $n$ gegen unendlich geht und $\lambda=np$ konstant ist, dann kann eine Binomialverteilung mit einer Poissonverteilung approximiert werden: $B(n, p)\xrightarrow{n\to \infty \text{ und } \lambda=np \text{ konstant}} Poi(\lambda)$

Ebenfalls wenn $n \gtrsim 50$ und $p\lesssim 0.1$, dann kann eine Binomialverteilung mit einer Poissonverteilung approximiert werden: $B(n, p)\approx Poi(n\cdot p)$
