# Elektromagnetismus

## Formeln

| Formel                                                       | Erklärung                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| $\vec F_{12}=\frac 1 {4\pi\varepsilon_0}\cdot \frac {Q_1Q_2}{|\vec r_{12}|^2}\cdot \vec n_{12}$ | Kraft zwischen den Ladungen $Q_1$ und $Q_2$.  Der Einheitsvektor $\vec n_{12}$ von Ladung $Q_2$ zu $Q_1$ $\vec n_{12}=\frac{\vec r_{12}}{|\vec r_{12}|}$(Konstante: $\varepsilon_0=8.859\cdot 10^{-12}[\frac {C^2}{Jm}]$) |
| $\vec E(\vec r)=\frac 1 {4\pi\varepsilon_0}\cdot \frac Q {|\vec r - \vec r_Q|^2}\cdot\frac {\vec r - \vec r_Q}{|\vec r - \vec r_Q|}$ | Das Elektrische Feld $\vec E$ einer Ladung am Ort $\vec r_Q$ |
| $\vec F =q\vec E(\vec r, t)$                                 |                                                              |
| $\vec F_L=q\vec v\times\vec B$                               | Die Kraft, eines Magnetfeldes auf eine Ladung $q$, welche sich mit $\vec v$ bewegt. |
|                                                              |                                                              |

![Vectors and Matrices](res/vectorcrossproduct.gif)

### Rechte-Hand Regel

![image-20211214232110895](res/image-20211214232110895.png)

### Rechte-Hand Regel 2

![image-20211214232227379](res/image-20211214232227379.png)

Wenn der Daumen in die technische Stromrichtung zeigt, dann zeigen die Finger den Umlaufsinn des $\vec B$-Feldes an.

### Vektorfelder

$$
\vec E (x, y, z, t)=\begin{bmatrix} E_x(x, y, z, t) \\ E_y(x, y, z, t) \\ E_z(x, y, z, t) \\ \end{bmatrix}
$$

Ein Vektor kann ein 2D oder 3D Koordinatensystem sein, in welchem Vektoren in eine Richtung zeigen. Diese Richtung kann zusätzlich auch noch von der Zeit abhängig sein.

### Magnetfeld

$[\vec B(\vec r, t)]=\frac {Ns}{Cm}=\frac{\text{Newton Sekunden}}{\text{Coulomb Meter}}=\frac{kg}{s C} = \text{Tesla}$

Ein Magnetfeld wird in Teslas angegeben. Dabei ist ein Tesla kg pro Coulomb Sekunde oder Newton Sekunden pro Coulomb Meter.

Um zu berechnen, mit vieviel Kraft ein Objekt mit einer Ladung beeinflusst wird, gibt es folgende Formel: $\vec F = q(\vec v \times \vec B)$

### Elektrofeld

$[\vec E (\vec r, t)]=\frac N C = \frac V M = \frac{kg}{ms^3A}$

Ein Elektrofeld wird Newton pro Coulomb, Volt pro Meter oder Kilogram pro Meter Sekunden³ Amper angegeben. Die Einheiten bedeuten dasselbe (Coulomb = Amper Sekunde)
