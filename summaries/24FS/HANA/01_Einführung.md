# Einführung

## Partielle Ableitung

Um die Funktion $z=f(x, y) = 2x^2 + 5 y$ abzuleiten, kann nach $x$ und $y$ separat abgeleitet werden:
$$
\begin{align}
\text{nach }x: \frac{\partial f}{\partial x} &= 4x + 0 \\
\text{nach }y: \frac{\partial f}{\partial y} &= 0 + 5 \\
\end{align}
$$
Diese Ableitung kann folgendermassen visualisiert werden:

![image-20240225130844140](./res/01_Einf%C3%BChrung/image-20240225130844140.png)

## Jacobi-Matrix

Für die Funktion $f: \mathbb R^n \to \mathbb R^m$ mit $\vec y = f(\vec x)=\begin{pmatrix}y_1=f_1(\vec x) \\ y_2 = f_2(\vec x)\\ ... \\ y_m=f_m(\vec x)\end{pmatrix}$ und $\vec x = (x_1, x_2, ..., x_n)^T$ ist die Jacobi-Matrix das folgende:
$$
Df(x)=\begin{pmatrix}
\frac{\partial f_1}{\partial x_1}(\vec x) & \frac{\partial f_1}{\partial x_2}(\vec x) & ... & \frac{\partial f_1}{\partial x_n}(\vec x) \\

\frac{\partial f_2}{\partial x_1}(\vec x) & \frac{\partial f_2}{\partial x_2}(\vec x) & ... & \frac{\partial f_2}{\partial x_n}(\vec x) \\

... & ... & ... & ... \\
\frac{\partial f_m}{\partial x_1}(\vec x) & \frac{\partial f_m}{\partial x_2}(\vec x) & ... & \frac{\partial f_m}{\partial x_n}(\vec x) \\
\end{pmatrix}
$$
In dieser Matrix ist in einer Reihe alle möglichen partiellen Ableitungen für $f_1(\vec x)$

## Nobla-Operator

$$
\grad = \begin{pmatrix}
\frac{\part}{\part x_1}\\
\vdots\\
\frac\part{\part x_n}
\end{pmatrix}
= \mathrm{grad} f(\vec{x})
$$

## Differentialoperatoren

### Laplace

$$
\Delta u(\vec x) = \grad \cdot \grad u(x) = \mathrm{div}(\grad u(x))
$$



### Gradient

Sei $f: D \subset \R^n \to \R$ differenzierbar, dann heisst 
$$
\mathbf{grad} f(\vec x)=D f(\vec x)^T=
\begin{pmatrix}
\partial_{x_1} f(\vec x) \\
\vdots\\
\partial_{x_n}f(\vec x)
\end{pmatrix}
$$
der *Gradient* von $f$.

### Divergenz

$$
\mathrm{div} f(\vec x) = \grad \cdot f(\vec x) = \frac{\part f_1}{\part x_1}(\vec x) +\dots+\frac{\part f_n}{\part x_n}(\vec x)
$$

Folgendes ist ein Beispiel:
$$
\vec F : \Omega \sub \R^u \to \R^u & \vec F(\vec x)=
\begin{pmatrix}
F_1(\vec x)\\
\vdots\\
F_n(\vec x)
\end{pmatrix}
\\ 
\mathrm{div} \vec F(\vec x) = \part_{x_1}F_1(\vec x) + \dots + \part_{x_n}F_n(\vec x) \\
\begin{align}
\mathrm{div}(\grad \vec F(\vec x))\\
& = \part_{x_1}F_1(\vec x) + \dots + \part_{x_n}F_n(\vec x) \\
&= \part_{x_1}\part_{x_1}F_1(\vec x)  +\part_{x_2}\part_{x_2}F_1(\vec x) + \dots + \part_{x_n}\part_{x_n}F_n(\vec x) \\
&= \part_{x_1^2}F_1(\vec x) + \dots + \part_{x_n^2}F_n(\vec x) 
\end{align}
$$
Wenn die Divergenz 

* positiv ist, dann steigt etwas (z.B. Raum wird wärmer)
* $=0$ ist, dann bleibt sie gleich,
* negative ist, dann sinkt etwas (z.B. Raum wird kälter)

### Rotation (curl in Englisch)

$$
W: \Omega \subset \R^3 \to \R^3\\
\grad \times W = \mathrm{rot } W = \begin{vmatrix}
\vec e_1 & \vec e_2 & \vec e_3 \\
\part x_1 & \part x_2 & \part x_3 \\
W_1 & W_2 & W_3
\end{vmatrix}
= \begin{pmatrix}
\part_{x_2} W_3 - \part_{x_3}W_2 \\
\part_{x_3} W_1 - \part_{x_1}W_3 \\
\part_{x_1} W_2 - \part_{x_2}W_1 \\
\end{pmatrix}
$$

## Satz von Gauss

$$
\int_\Omega \mathrm{div } \vec F \mathrm\, dV = \int_{\part\Omega}\vec F \cdot \vec n \, \mathrm ds
$$

Der linke Teil stellt ein abgeschlossenes Gebiet, der rechte Teil ist die Oberfläche von $\Omega$. 

## FEM

1. Multiplikation mit Testfunktion $v(x)$
2. Partiel integrieren
   $v(0)=v(1)=0$ gilt immer da es in den Funktionesraum $V$ so eingebaut wird

## Extremum & Infimum

Wenn eine Menge als $]a, b[=(a, b) \in \R$ definiert ist, dann gibt es kein minimum und maximum. Anstelle, gibt es ein das Extremum (max) und das Infimum (min), welche angenähert werden aber nie getroffen werden.
$$
\sup_{x\in]a,b[\in \R}=b \\
\inf_{x\in]a, b[\in \R}=a
$$
