# Lineare Gleichungssysteme

## Gaus

## LR-Zerlegung

$$
\underbrace{A}_{LR}x=b\\
L\underbrace{R\cdot x}_y=b\\
Ly=b\\
Rx=y
$$



## QR-Zerlegung

### Orthoggonalmatrix

Dafür eine Matrix eine Orthogonalmatrix ist, muss folgendes gelten:
$$
Q^T\cdot Q=I \Leftrightarrow Q^T = Q^{-1}
$$

### Householder-Matrix

$$
\vec u=\pmatrix{1 \\ 2 \\ 3}\\
\vec u \text{ ist nicht normiert, daher:}\\
\tilde u = \frac {\vec u}{|\vec u|}=\frac 1 {\sqrt{14}}\pmatrix{1 \\ 2 \\ 3}\\
H = I_n - 2\tilde u \tilde u ^T\\ = 
\pmatrix{1 & 0 & 0\\ 0 & 1 & 0 \\ 0 & 0 & 1} - 2\cdot \frac 1 {\sqrt{14}} \pmatrix{1 \\ 2 \\ 3} \cdot \pmatrix{1 & 2 & 3}
$$



### Lösungsverfahren

## Fehlerrechnungen

$$
A\tilde x=\tilde b = b + \Delta b
$$

* $\Delta b$ = Residuum oder Defekt
* $\Delta x = \tilde x - x$ =Fehler

### Vektornorm

$$
||.|| : \R^n \to \R\\ 
\text{Dies ist definiert durch:}\\
||x|| \ge 0 \text{ und } ||x|| = 0 \Leftrightarrow x = 0\\
||\lambda x|| = |\lambda| \cdot ||x||\\
||x + y || \le ||x|| + ||y||
$$

 

Es gibt mehrere Normen für Vektoren, welche diese Definition erfüllt:

* Erste-Norm, Summennorm:
* Zweite-Norm - Euklidischenorm:
* $\infty$-Norm - Maximumnorm

Ebenfalls gibt es mehrere Normen für Matrixen:

* Erste-Norm, Spaltensummennorm:
* Zweite-Norm: Spektralnorm: $||A||_2=\sqrt {(p(A^TA))}$
* $\infty$-Norm: Zeilensummennorm: $||A||_\infty=\max_{i=1,..n}\sum^n_{j=1} |a_{ij}|$
