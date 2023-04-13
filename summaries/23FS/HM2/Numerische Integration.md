# Numerische Itegration

## Rechteck- & Trapezregel

![image-20230412081902580](res/Numerische Integration/image-20230412081902580.png)

<img src="res/Numerische Integration/image-20230412081843980.png" alt="image-20230412081843980" style="zoom:50%;" />

Die folgenden formel ziehen ein Rechteck, bzw. Trapez über das ganze Integral.
$$
\text{Das Integral}\\
\int_a^b f(x)\mathrm d x\\
\\
\text{kann folgendermassen approximiert werden}\\
Rf=f\left(\frac{a+b}{2}\right) \cdot (b - a)\\
Tf=\frac{f(a) + f(b)} 2 \cdot (b - a)
$$
*(Rf = Rechtecksregel, Tf = Trapezregel)*

Für die summierte Rechteck- & Trapezregel wird das Integral in kleinere Schritte mit der breite $h$ unterteilt.
$$
Rf(h)=h\cdot \sum^{n-1}_{i=0} f(x_i +\frac h 2)\\
Tf(h)=h\cdot \left(\frac{f(a) + f(b)}{2} +\sum^{n-1}_{i=1} f(x_i) \right)\\
\text{wobei gilt}
x_i=a+i\cdot h\\
h=\frac{b-a} n
$$
<img src="res/Numerische Integration/image-20230412082819366.png" alt="image-20230412082819366" style="zoom:50%;" />

## Simpsonregel

<img src="res/Numerische Integration/image-20230412084035153.png" alt="image-20230412084035153" style="zoom:67%;" />

Für das lösen eines Segments müssen folgende Formel ausgerechnet werden. Dabei wird das Polynom $p(x)=\alpha+\beta(x-a) + \gamma(x-a)(x-b)$ verwendet.

**<img src="res/Numerische Integration/image-20230412085456827.png" alt="image-20230412085456827" style="zoom: 67%;" />**

Da $f(x)\approx p(x)$ gilt, kann das Polynom integriert werden:

<img src="res/Numerische Integration/image-20230412085647265.png" alt="image-20230412085647265" style="zoom:67%;" />

Die Regel oben haben nur ein Segment benutzt. Wie aber auch bei der Rechtecks- und Trapezregel, kann auch hier die summierte Simpsonregel verwendet werden.
$$
Sf(h)=\frac h 3 \left(\frac 1 2 f(a) + \sum^{n-1}_{i=1} f(x_i) 
+ 2 \sum^n_{i=1} f\left (\frac{x_{i-1}+x_i}{2} \right) + \frac 1 2 f(b) \right)
$$
Die Simpsonsregel kann auch mit dem Rechtecks- und Trapezregel berechnet werden:
$$
Sf(h)=\frac 1 3 (Tf(h) + 2 Rf(h))
$$
