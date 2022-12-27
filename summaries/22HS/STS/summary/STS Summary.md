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