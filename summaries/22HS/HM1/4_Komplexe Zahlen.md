# Komplexe Zahlen

Eine Komplexe Zahl hat einen imaginären und einen realen Komponent. Diese werden entweder in der Form $z=x+iy$ oder der Form $P(x, y)$ geschrieben, wobei gilt $x, y \in \R$.

$i$ ist definiert als $i^2=-1$

Die Definition von $\C$ ist $\C=\{z | z = x+iy \wedge x,y \in \R \}$

Es gibt zudem noch die Funktionen $\Re(z)=x$ und $\Im(z)=y$ (für $z = x+iy$)

Da eine komplexe Zahl als Punkt dargestellt werden, kann auch der Betrag berechnet werden: $|z|=\sqrt{x^2+y^2}=\sqrt{z\cdot z^*}$

## Konjugierte Komplexe Zahlen

Die konjugierte komplexe Zahl von $z = x + yi$ ist $z^*=x-iy$ und ist entlang der x-Achse gespiegelt.

<img src="res/image-20221130090716290.png" alt="image-20221130090716290" style="zoom:67%;" />

Der Term $z\cdot z^*=(x+yi)\cdot(x-yi)=x^2-i^2y^2=x^2-(-1)y^2=x^2+y^2$ zeigt, wie $\sqrt{z\cdot z^*}=|z|$ und $z\cdot z^*=|z|^2$ (Achtung: Der Betrag ist wichtig!)

## Darstellungs Formen

<img src="res/4_Komplexe Zahlen/image-20221207082551532.png" alt="image-20221207082551532" style="zoom:50%;" />



* Koordinaten-Form: $P(x, y)$
* Normal-Form: $z = x + yi$
* Trigometrische-Form (aka Polar-Form): $z=r\cdot (\cos \phi + i\cdot \sin \phi)$ ($r$ ist dabei die Länge)
* Exponential-Form: $re^{i\varphi}$ ($r$ ist dabei die Länge)

Als Beispiel: $z = 1 + 1i = \sqrt 2 (\cos{\frac \pi 4} + i \sin{\frac \pi 4}) = \sqrt 2 \cdot e^{i\cdot \frac \pi 4} $

Um zwischen der Exponetialform und der Koordinationsform zu konvertieren, gilt:
$$
\text{Für: } z=x+y\\
x = r\cdot \cos(\varphi)\\
y = r\cdot \sin(\varphi)
$$


## Grundrechungsarten

* Summieren: $z_1 + z_2 = (x_1 + x_2) + i(y_1 + y_2)$
* Subtrahieren: $z_1 - z_2 = (x_1 - x_2) + i(y_1 - y_2)$
* Multiplizieren: $z_1 \cdot z_2 = (x_1 \cdot x_2 - y_1\cdot y_3) + i(x_1\cdot y_2 +x_2 \cdot y_1)$
* Dividieren: $\frac {z_1}{z_2}=\frac {z_1\cdot z_2^*}{z_2 \cdot z_2^*}=\frac {(x_1 + iy_1)(x_2-iy_2)}{(x_2 + iy_2)(x_2 - iy_2)}=\frac {(x_1 + iy_1)(x_2-iy_2)}{x_2^2-y_2^2}$
* Potenzieren: $z^n=(re^{i\varphi})^n=r^n\cdot e^{i\varphi n}$
* Wurzel-Ziehen: $\sqrt[n]{z}=z^{\frac 1 n}=r^{\frac 1 n}\cdot e^{\frac {i\varphi + 2\pi \cdot k} n}$, wobei $k=0, 1, 2, ..., n-1$ (Bei $k\ge n$ wiederholen sich die Lösungen)

Ein Vorteil der Exponential-Form ist, dass Rechnungen um einiges einfacher von der Hand gehen: 
$$
z_1=r_1e^{i\varphi_1}\\
z_2=r_2e^{i\varphi_2}\\
z_1z_2=r_1e^{i\varphi_1}\cdot r_2e^{i\varphi_2} = r_1r_2\left(e^{i\varphi_1+i\varphi_2}\right)
$$

## Polynome Lösen

Für das Polynom $a_nx^n+a_{n-1}x^{n-1}+...+a_1x^1+a_0=0$ und $a_i, x \in \R$, dann gibt es genau $n$ Lösungen und kann maximal $n$ reale Lösungen geben.
$$
z^6=1
$$


<img src="res/4_Komplexe Zahlen/image-20221207092416432.png" alt="image-20221207092416432" style="zoom:50%;" />

## Eigenwerte

## Numerische Berechnung von Eigenwerte und Eigenvektoren

Es gilt, wenn zwei Matrizen $A, B \in \R^2$ zueinander ähnlich sind, dann gilt das $A$ und $B$ die selben Eigenwerte inkl. deren albgebraischen Vielfachen.

### Ähnliche Matrix

### Diagonalisierbare Matrix

## Spektralradius (und Spektralnorm)

