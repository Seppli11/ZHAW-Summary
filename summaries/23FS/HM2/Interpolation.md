# Interpolation

Gegeben sind $n+1$ Stützpunkte/Wertpaare $(x_i, y_i)$, wobei $x_i \neq x_i$ für $i\neq j$ gelten muss. Gesucht ist nun eine steetige Funktion $g$ mit der Eigenschaft $g(x_i)=y_i$ für alli $i=0, ..., n$

## Polynominterpolation

Wenn $n+1$ Stützpunkte gegen sind, kann das Polynom $P_n(x)=a_0 + a_1x + a_2+x^2 + ... + a_nx^n$

Wenn $x$ ein Vektor ist, kann auch eine Vandermonde-Matrix gebildet werden:
$$
\begin{align}
a_0 + a_1x_0 + a_2+x_0^2 + ... &+ a_nx_0^n\\
a_0 + a_1x_1 + a_2+x_1^2 + ... &+ a_nx_1^n\\
...& \\
a_0 + a_1x_n + a_2+x_n^2 + ... &+ a_nx_n^n\\
\end{align}
$$

$$
\begin{pmatrix}
1 & x_0 & x_0^2 & ... & x_0^n\\
1 & x_1 & x_1^2 & ... & x_1^n\\
& & & ... \\
1 & x_n & x_n^2 & ... & x_n^n\\
\end{pmatrix} \cdot
\begin{pmatrix}
a_0 \\
a_1 \\
... \\
a_n\\
\end{pmatrix} =
\begin{pmatrix}
y_0 \\
y_1 \\
... \\
y_n\\
\end{pmatrix}
$$

Diese Rechnung ist allerdings oft schlecht Konditioniert und wird für $n> 20$ Stützpunkte unstabil. Ein möglichen Ersatz ist das Lagrange Polynom

### Lagrange Interpolation

Das Lagrange Polynom kann für $n$ Stützpunkte berechnet werden und ergibt ein Polynom mit dem Rang $n-1$.
$$
P_n(x)=\sum^n_{i=0}I_i(x)y_i\\
I_i(x)=\prod^n_{\substack{j=0\\i\neq j}}\frac{x-x_j}{x_i-x_j}
$$
Der maximale absoluten Fehler der dabei entstehen kann ist:
$$
|f(x)-P_n(x)| \le \frac{|(x-x_0)(x-x_1)...(x-x_n)|}{(n+1)!}\cdot(\max_{x0\le \xi \le x_n}|f^{(x+1)}(\xi)|)
$$
*Als Bemerkung $f^{(x+1)}$ ist die $(x+1)$-te Ableitung*

Da für die Fehlerberechnung die eigentliche Funktion $f$ benötigt wird, ist dies recht nutzlos.