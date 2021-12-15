# Summenzeichen

\sum\limits_{laufvariable}^{limit} expr -> $\sum\limits_{k=1}^{5} 2\cdot k$

Das Summenzeichen ist eine Art For-Loop in Mathe.

Folgendes Beispiel: $\sum\limits_{k=5}^{10} 2\cdot k$ <br> 
kann zu folgendem Code übersetzt werden:

    int sum = 0
    for(int k = 5; k <= 10; k++)
        sum += 2*k;

Wichtig: Die obere Limite ist inklusiv. Im oberen Beispiel wird $2\cdot k$ also 6x ausgeführt.

## Recheregeln

Mit den folgenden Recheregeln können Summen zusammengefasst oder aufgespalten werden

- $\sum\limits_{k=1}^5 (c\cdot k) = c\cdot \sum\limits_{k=1}^5 k$ 
- $\sum\limits_{k=1}^5 (2k + k^2) = \sum\limits_{k=1}^5 2k + \sum\limits_{k=1}^5 k^2$ 
- $\sum\limits_{k=1}^n k + \sum\limits_{k=n + 1}^m k = \sum\limits_{k=1}^m k$ 
- Achtung: $\sum\limits_{k=1}^5 (2k \cdot k^2) \neq (\sum\limits_{k=1}^5 2k) \cdot (\sum\limits_{k=1}^5 k^2)$ 

Ebenfalls ein nützlicher Trick:
$\sum\limits_{k=u}^n k = \frac{(n-u+1)\cdot (n + u)}{2}$ 

In folgender Summe $\sum\limits_{k=2}^6 k$ 
können wir feststellen, dass wenn wir die k der Reihe nach zusammen rechnen, dass es immer $2+6 = 8$ gibt.

| Aufsteigende Reihe | 2   | 3   | 4   | 5   | 6   |
| ------------------ | --- | --- | --- | --- | --- |
| Absteigende Reihe  | 6   | 5   | 4   | 3   | 2   |
| Summe              | 8   | 8   | 8   | 8   | 8   |

Alls können wir auch 5-mal 8 rechnen und dies durch 2 teilen, da wir sonst zwei Reihen miteinander verrechnen.
