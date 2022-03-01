# Lineare Gleichungssystem

Eine Gleichung ist lineare, wenn sie die folgende Form entspricht: $ax+by+cz=d$

## Gausverfahren

Ein lineares Gleichungssystem kann als eine Matrize Multiplikation geschrieben werden.
$$
\text{}
\begin{cases}
i_1x+i_2y=c_1\\
i_3x+i_4y=c_2\\
i_5x+i_6y=c_2
\end{cases} 
\\
\begin{pmatrix}
i_1 & i_2 \\
i_3 & i_4\\
i_5 & i_6
\end{pmatrix} \cdot 
\begin{pmatrix}
x \\
y
\end{pmatrix} =
\begin{pmatrix}
i_1x+i_2y\\
i_3x+i_4y\\
i_5x+i_5y
\end{pmatrix} =
\begin{pmatrix}
c_1\\
c_2\\
c_3
\end{pmatrix}
$$
Dies kann vereinfacht als eine erweiterte Koeffizienten Matrix geschreiben werden:
$$
\left( \begin{array}{cc|cr}
i_1 & i_2 & c_1\\
i_3 & i_4 & c_2\\
i_5 & i_6 & c_3
\end{array} \right)
$$

### Zeilenstufenform

Die Zeilenstufenform ist definiert durch die folgenden Regeln:

* Alle Zeilen mit nur `0` stehen zu unterst
* Wenn eine Zeile nicht nur aus `0` besteht, ist die erste Zahl, welche keine `0` ist, eine `1`. Diese `1` wird als *führende Eins* bezeichnet
* Eine führende Eins, welche weiter unten steht, muss auch weiter rechts stehen, als die anderen führenden Einsen

Zusätzlich gibt es noch die *reduzierte Zeilenstufenform*, bei welcher noch die Regel gilt, dass nur eine `1` pro **Spalte** stehen darf. Die restlichen Elemente müssen `0` sein.

Bei der erweiterten Koeffizientenmatrix sind die Resultat-Werte (die $c_i$ Werte) von den Rege