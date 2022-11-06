# Kombinatorik

## Binomialkoeffizient

$$
\begin{pmatrix}n \\k \end{pmatrix}=\frac{n!}{(n-k)!\cdot k!}
$$

In Python der Befehl `scipy.special.binom(n, k)` kann benutzt werden

## Beispiels Probleme

### Zahlenschloss-Problem

Es gibt ein Zahlencode mit 6 Zahlen von 0 bis 9. In diesem Fall gibt es $10^6$ Kombinationen. Es kommt dabei auf die Reihenfolge der Zahlen darauf an. Also `000222` ist nicht das selbe, wie `222000`.

Generalisiert, wenn es $n$ Stellen mit $b$ Möglichkeiten gibt, dann gibt es $b^n$ Möglichkeiten.

### Schwimmwettkampf-Problem

Es starten 10 Schwimmerinnen, wie viel mögliche Platzierungen gibt es, wenn nur die ersten drei Plätze betrachtet werden? Für den ersten Platz gibt es $10$ Möglichkeiten, für den zweiten $9$ Möglichkeiten und für den dritten $8$ Möglichkeiten. Daher $10\cdot 9 \cdot 8=\frac{10!}{(10-3)!}=\frac{10!}{7!}$. Dabei kommt es auf die Reihenfolge darauf an.

Dies kann generaliesiert auf folgendes werden:
$$
\frac{AnzahlStellen!}{(AnzahlStellen - AnzahlRelevantenStellen)!}
$$

### Lotto-Problem

Wie gross sind die Chancen beim Lotto "6 aus 49" mit einem Versuch sechs richtige Zahlen vorauszusagen? Es gibt 49 Kugel mit Zahlen, von welchen 6 gezogen werden. Nachdem eine Kugel gezogen wurde, wird sie nicht wieder zurück gelegt und kann daher nicht zwei mal gezogen werden.

$\frac{49!}{(49-6)!}=\frac{49!}{43!}$ sind die Anzahl Möglichkeiten, wenn die Reihenfolge darauf ankäme. Bei diesem Lotto ist dies aber nicht der Fall, daher müssen noch $6!$ Möglichkeiten "abgezogen" werden, da es für jede Menge von 6 Zahlen $6!$ Möglichkeiten gibt, sie anzuordnen. Es ergibt sich daraus $\frac{49!}{(49-6)!\cdot 6!}=\begin{pmatrix}49 \\ 6\end{pmatrix}$

Generalisiert: Wenn $n$ Möglichkeiten gibt, von welchen $k$ von Interesse sind, dabei aber die Reihenfolge vernachlässigbar ist, dann wird der Binomialkoeffizienten benützt: $\begin{pmatrix}n \\ k \end{pmatrix}$

### Zahnarzt-Problem

Eine Zahnärztin erlaubt den Kindern, nach der Behandlung zur Belohnung 3 Spielzeuge aus 5 Töpfen auszusuchen. Jeder Topf ist mit derselben Art von Spielzeugen gefüllt. Wie viele verschiedene Möglichkeiten hat ein Kind?

Für dieses Problem kann folgendes Ersatzproblem verwendet werden: Ein Spielzeug wird als `X` markiert. Die Markierungen werden mit `|` unterteilt, was die Grenzen zwischen den Töpfen markiert. Z.B. `X||XX||` heisst, das Kind hat 1 Spielzeug aus dem ersten Topf und zwei Spielzeuge aus dem dritten Topf genommen. Eine andere Betrachtungsweise wäre, es gibt 7 Stellen, wovon 3 eine `X` sind. Dies kann als $\begin{pmatrix}7 \\ 3\end{pmatrix}=\begin{pmatrix}5+3-1 \\ 3\end{pmatrix}$ geschrieben werden.