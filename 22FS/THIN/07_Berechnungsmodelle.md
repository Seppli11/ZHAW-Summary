# Berechnungsmodelle

## Church-Turning-These & Gandys These M

> **Intuitive berechenbare Funktion**: eine Funktion, welche algorithmisch (durch eine mechanisches Verfahren) berechnet werden kann
>
> **Turing-berechenbare Funktionen**: Funktionen, welche von einer Turing-Maschinen berechnet werden können
>
> Jede intuitive berechenbare Funktion lässt sich mit einer Turingmaschine berechnen.
>
> **Gandys These M**: Alles, was jemals mit einer (endlichen) Maschine/physikalischen Apparatur berechnet werden kann, ist bereits von einer Turing-Maschine berechenbar.
>
> Bis jetzt wurde noch kein Gegenbeispiel zu beiden Thesen gefunden worden.

## Turing-berechenbare Funktion

![image-20220405125435040](res/image-20220405125435040.png)

$u$ ist ein Wort. Pfeil noch oben ist nicht teil von $\Gamma$.

![image-20220405130040017](res/image-20220405130040017.png)

Oder: Wenn es eine Funktion gibt, welche für alle Input Wort anhält.

### Beispiel

![image-20220405130209018](res/image-20220405130209018.png)

wenn zu `1011` 1 addiert werden soll, wird so lange von rechts nach links gerückt, bis eine 0 gefunden wird. Diese wird zu einem `1` gemacht. Die `1` davor werden zu `0`

## Loop-Programme

> Ein LOOP-Programm besteht aus folgendem:
>
> * Variabeln: $x_0$, $x_1$, $x_2$, ...,$x_k$
> * Konstante: 0, 1, 2, 3, ...
> * Zuweissungen: $x_k=x_j+c$ oder $x_k = x_j - c$

![image-20220405133641515](res/image-20220405133641515.png)

![image-20220405133652149](res/image-20220405133652149.png)

![image-20220405133741192](res/image-20220405133741192.png)

Wenn die Loop-Variable (x3 in `LOOP x3 DO ... END`) im Loop verändert wird, hat dies keinn Einfluss auf die Anzahl Durchläufe.

## While-Programme

![image-20220405135718807](res/image-20220405135718807.png)

### Turing-Vollständigkeit

![image-20220405140233522](res/image-20220405140233522.png)

Auch jede Turing-Maschine kann mit einem While-Programm implementiert werden.

## GOTO-Programme

![image-20220405140409314](res/image-20220405140409314.png)

![image-20220405140420107](res/image-20220405140420107.png)

![image-20220405140430132](res/image-20220405140430132.png)

![image-20220405140438311](res/image-20220405140438311.png)

## Primitiv rekursive Funktionen

![image-20220405141425838](res/image-20220405141425838.png)

![image-20220405141416737](res/image-20220405141416737.png)

![image-20220405141931968](res/image-20220405141931968.png)

![image-20220405142412790](res/image-20220405142412790.png)

![image-20220405144202626](res/image-20220405144202626.png)

![image-20220405144556344](res/image-20220405144556344.png)

### Ackermannfunktion

Eine Ackermannfunktion $a: \N^2\rightarrow N$ ist durch die Gleichung:
$$
\begin{align}
a(0, m)&= m + 1\\
a(n + 1, 0) &= a(n, 1)\\
a(n + 1, m + 1) &= a(n, a(n + 1, m))
\end{align}
$$
![image-20220405150255050](res/image-20220405150255050.png)

### Loop-Interpreter

