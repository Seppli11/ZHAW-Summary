# Differentialgleichungen

Eine gewöhnliche Differentialgleichung ist eine Gleichung, welche nur nach einer Variable abgeleitet wird:
$$
\frac{\part y}{\part t} = f(t, y(t))
$$
Im oben Beispiel ist es eine gewöhnliche Differentialgleichung 1. Ordnung, da nur einmal Abgeleitet wurde.

Genereller ausgedrückt, folgendes ist eine gewöhnliche Differentialgleichung $n$-ter Ordnung:
$$
y^{(n)}(x) = f(x, y(x), y'(x), ..., y^{(n-1)}(x))
$$
Eine allgemeine Lösung für eine Differentialgleichung $n$-ter Ordnung hat $n$ unabhängige Parameter (von den Integrationskonstanten).

Differentialgleichungen, welche die folgende Form haben
$$
\frac{\part n}{\part t}=-\lambda n
$$
haben die Lösung $n(t)$:
$$
n(t)=n_0e^{-\lambda t}
$$

## Anfangswertproblem

Bei einem Anfangswertproblem wird, zusätzlich zu der Gleichung, den Funktionswert bei $x_0$, wie auch den Wert für jede benützte Ableitung bei dem selben Wert $x_0$.

Als Beispiel für folgende Funktion $s$ wird $C_1$ und $C_2$ benötigt, damit ein Resultat berechnet werden kann. Es wird also $s(t=0)$ und $s'(t=0)$ benötigt, um das Anfangswertproblem zu lösen.
$$
s''=g\\
s(t)=\frac 1 2 g t^2 + C_1t + C_2\\
s(t=0)=C_2\\
s'(t=0)=v(t=0)=C_1
$$

## Richtungsfelder

<img src="res/Differentialgleichungen/image-20230503080741430.png" alt="image-20230503080741430" style="zoom:67%;" />

Ein Richtungsfeld stellt die Steigung als Pfeile dar. Dafür wurde in diesem Beispiel alle $y'$ für alle Punkte berechnet und eingezeichnet.

## Eulerverfahren

### Klassisch

![image-20230503082525426](res/Differentialgleichungen/image-20230503082525426.png)

Um eine Lösung für eine Differentialgleichung mit einem Richtungsfeld zu finden, kann eine Schrittweite $h$ definiert werden. Jeder Punkt $(x_i, y_i)$ soll nun den Pfeilen im Feld folgen. Dies kann folgendermassen für eine Differentialgleichung $y'=f(x, y)$ erledigt werden:
$$
\begin{align}
x_{i+1} &= x_i + h\\
y_{i+1} &= y_i + y' \cdot h \\
		&= y_i + f(x_i, y_i) \cdot h
\end{align}
$$
Zusätzlich wird auch noch ein Startpunkt $(x_0, y_0)$ benötigt.

### Mittelpunkt

![image-20230503085441316](res/Differentialgleichungen/image-20230503085441316.png)

Im Vergleich zum Eulerverfahren, wo die Steigung beim Punkt $(x_i, y_i)$ berechnet wird, wird beim Mittelpunkt-Verfahren die Steigung bei $(x_i+\frac h 2, y_i + \frac h 2)$ berechnet. 

Dafür muss aber der Punkt $(x_i+\frac h 2, y_i + \frac h 2)$ zuerst berechnet werden. Daher ergibt sich folgendes:
$$
\begin{align}
x_{h/2} &= x_i + \frac h 2\\
y_{h/2} &= y_i + \frac h 2 \cdot f(x_i, y_i)\\
\\
x_{i+1} &= x_i + h\\
y_{i+1} &= y_i + f(x_{h/2}, y_{h/2}) \cdot h
\end{align}
$$

### Modifiziert

![image-20230503090234013](res/Differentialgleichungen/image-20230503090234013.png)

Beim modifizierten Verfahren wird zuerst die Steigung bei $(x_i, y_i)$ und bei $(x_{i+1}, y_{i+1})$ berechnet. Danach wird der nächste Punkt mit dem Mittel zwischen den beiden Steigungen den nächsten Punkt berechnet.

![image-20230503090603593](res/Differentialgleichungen/image-20230503090603593.png)
