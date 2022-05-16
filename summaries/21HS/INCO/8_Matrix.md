# Matrix

Eine Matrix ist ein rechteckiges Zahlenfeld, wie z.B. diese 3x2 Matrix: $\begin{bmatrix}7 & 6 & 2\\2 & 3 & 3\end{bmatrix}$

## Addition und Subtraktion

Matrizen addieren und subtrahieren ist denkbar einfach. Jede Zahl wird mir der Zahl an der gleichen Stelle in der anderen Matrix addiert, bzw. subtrahiert.
$$
\begin{bmatrix}x_1 & x_2 & x_3 \\ x_4 & x_5 & x_6\end{bmatrix} - 
\begin{bmatrix}y_1 & y_2 & y_3 \\ y_4 & y_5 & y_6\end{bmatrix} = 
\begin{bmatrix}x_1-y_1 & x_2-y_2 & x_3-y_3 \\ x_4-y_4 & x_5-y_5 & x_6-y_6\end{bmatrix}
$$
Dasselbe gilt auch für die Addition.

## Skalar Multiplikation

Wenn eine Matrix mit einem Wert, wie 3 multipliziert wird, entsteht eine neue Matrix, in welcher alle Werte mit diesem Wert multipliziert wurden:
$$
c \cdot
\begin{bmatrix}x_1 & x_2 & x_3 \\ x_4 & x_5 & x_6\end{bmatrix}= 
\begin{bmatrix}c\cdot x_1 & c\cdot x_2 & c\cdot x_3 \\ c\cdot x_4 & c\cdot x_5 & c\cdot x_6\end{bmatrix}
$$

## Matrix Multiplikation

Wenn zwei Matrizen multipliziert werden, wie $A\cdot B$, dann muss die Breite von $A$ gleich die Höhe von $B$ sein.  Das Resultat ist eine Matrix, welche so hoch ist, wie $A$ und so breit ist, wie $B$.
$$
\begin{bmatrix}x_{11} & x_{21} & x_{31} \\ x_{12} & x_{22} & x_{32}\end{bmatrix} \cdot
\begin{bmatrix}y_{11} & y_{21} \\ y_{12} & y_{22} \\ y_{13} & y_{23}\end{bmatrix} = 
\begin{bmatrix}
	x_{11}\cdot y_{11} + x_{21}\cdot y_{12} + x_{31}\cdot y_{13} & 
	x_{11}\cdot y_{21} + x_{21}\cdot y_{22} + x_{21}\cdot y_{23} \\
	x_{12}\cdot y_{12} + x_{22}\cdot y_{12} + x_{32}\cdot y_{13} & 
	x_{12}\cdot y_{21} + x_{22}\cdot y_{22} + x_{22}\cdot y_{23} 
\end{bmatrix}
$$
Oder in Worte, in das Feld (1/1) wird jeder Wert der Zeile 1 von A mit jedem Wert der Spalte 1 von B gerechnet. In den Wert (1/2), wird Zeile 1 mit der Spalten 2 gerchnet.

Das Feld (2/1) wird berechnet, in dem die Reihe 2 mit der Spalte 1 multipliziert wird und das Feld (2/2) wird berechnet in dem, die Reihe 2 mit der Spalte 2 gerechnet wird.

Wegen dieser Rechnenart, ist die Multiplikation mit zwei Matrizen nicht kommunikativ.

Mit dem TR und Ein-Bit Arithmethik, kann modulo 2 gerechnet werden, um das korrekte Resultat zu bekommen.

## Einheitsmatrix

Eine Einheitsmatrix, ist eine quadratische Matrix, welche Diagonal überall eine `1` hat und sonst `0`:
$$
\begin{bmatrix}
1 & 0 & 0 & 0\\
0 & 1 & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{bmatrix}
$$
Diese Matrix hat die Eigenschaft, dass wenn eine Matrix $A$ mit einer Identitätsmatrix multipliziert wird, dass wieder die Matrix $A$ herauskommt.

## Inverse Matrix

Die Inverse Matrix, ist die Matrix $A^{-1}$, welche mit der Matrix $A$, eine Identitätsmatrix $I$ ergibt:

$A\cdot A^{-1}=I$

## Transponierte Matrix

Eine transponierte Matrix $A^T$ von $A$ ist, wenn die Spalten in $A$ zu Reihen werden und die Reihen in $A$ zu Spalten werden:
$$
B= \begin{bmatrix}
1 & 2 & 3\\
3 & 4 & 5
\end{bmatrix}\\
B^T= \begin{bmatrix}
1 & 3 \\
2 & 4\\
3 & 5
\end{bmatrix}
$$
