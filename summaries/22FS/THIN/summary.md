---
title: "THIN Summary"
tags:
- summary
- THIN
---
# Summary

| Begriff                        | Beschreib                                                    |
| ------------------------------ | ------------------------------------------------------------ |
| Alphabet                       | Endliche, nichtleere Menge von Symbolen ($\Sigma=\{a, b, c\}$) |
| Wort                           | Endliche Folge von Symbolen                                  |
| $\varepsilon$                  | Das Leere Wort ($\vert \varepsilon\vert=0$)                  |
| Sprache                        | Eine Menge von Wörtern ($L=\{10, 1100, ...\}$, in Prosa oder $L=\{1^n0^n\mid n\in \N\}$) |
| $\emptyset$                    | Leere Sprache ($\emptyset \neq \{\varepsilon\}$)             |
| $\vert abc \vert=3$            | Länge des Wortes                                             |
| $\vert abca\vert_a=2$          | Häufigkeit von a                                             |
| $(abc)^R$                      | Spiegelwort von $abc$                                        |
| (echter) Präfix                | Der Start eines Wortes (echt = Präfix nicht gleich das Wort)  Kann auch $\varepsilon$ sein |
| (echter) Infix                 | Teilwörter  (echt = Infix nicht gleich das Wort) Kann auch $\varepsilon$ sein |
| (echter) Suffix                | Das Ende des Wortes (echt = Suffix nicht gleich das Wort)  Kann auch $\varepsilon$ sein |
| $\Sigma^2$                     | Alle Wörter des Alphabets $\Sigma$ mit der Länge 2           |
| Kleenesche Hülle $\Sigma^*$    | Alle Wörter des Alphabets $\Sigma$ ($\Sigma^+=\Sigma^*\setminus\{\varepsilon\}$) |
| Konkatination $x\circ y=xy$    | Zwei Wörter werden zusammen verketet                         |
| Wortpotenzen $(ab)^3=ababab$   |                                                              |
| Sprachen-Konkatenation         | $AB=\{uv\mid u \in A \text{ und } v \in B\}$                 |
| Kleenesche Hülle einer Sprache | $A^*=\varepsilon \cup A \cup AA \cup AAA \cup ...$           |
| Komplement einer Sprache       | $\overline L=\Sigma^*-L=\Sigma^*\setminus L$                 |

## Chomsky-Hirarchie

![image-20220322130545131](res/image-20220322130545131.png)

## Regex

* $(0|1)$ - entweder 0 oder 1 (Manchmal wird dies auch als $(0+1)$ geschrieben)
* $x^*$ - beliebig oft $x$, auch null mal
* $x^+=xx^*$ - mindestens 1-mal $x$
* $x?=(x|\epsilon)$ - $x$ ist optional
* $\epsilon$ - eine leere Regular-Expression. Diese matcht nichts. Beschreibt $\{\varepsilon\}$
* $[x_1, x_2, ...,x_k]=x_1|x_2|...|x_k$ 
* $\oslash$ - eine leere Menge von Regular-Expressions
* $\O$ - eine leere Sprache
* `*` zuerst verarbeiten, danach Konkatenation, danach `|` verarbeiten (Stern vor Konkatenation vor Strich)

Wenn zwei Sprachen regulär sind, ist das Resultat von einem Operator mit diesen Sprachen regulär

## Endliche Automaten

> **Deterministische Endlichen Automat**: $M=(Q, \Sigma, \delta, q_0, F)$
>
> * $Q$ : Alle Zustände des Automaten $Q=\{q_0, q_1, ...,q_n\}$
> * $\Sigma$: Eingabealpabet
> * $\delta: Q\times \Sigma \rightarrow Q$: Übergangsfunktionen, welche von einem Zustand und einem Eingabe Symbol zum nächsten Zustand führt
> * $q_0$: Startzustand
> * $F\subseteq Q$: Menge der akzeptierten Zuständen. Mindestens ein Zustand muss akzeptiert sein

Im folgenden Beispiel sind ist eine Berechnung, bestehended aus Berechnungsschritte (welche aus Konfigurationen bestehen). Die Startkonfiguration ist: $\{q_0\}\times \Sigma^*$, die Endkonfiguration:  $(q, w)\in Q\times\{\epsilon\}$
$$
(q0, a_1a_2a_3)\vdash_A(q_1, a_2a_3)\vdash_A(q_2, a_3)\vdash_A(q4, \epsilon)=(q0, a_1a_2a_3)\vdash_A^*(q4, \epsilon)
$$
Die **Sprache** eines endlichen Automaten besteht aus allen Wörter, welche in einem Endzustand landen ohne verbleibenden Input.

| Was                                                          | Beschreibung                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="res/image-20220301140455457.png" alt="image-20220301140455457" style="zoom: 50%;" /> | Der Startzustand                                             |
| <img src="res/image-20220301140523138.png" alt="image-20220301140523138" style="zoom: 50%;" /> | Normaler Zustand                                             |
| <img src="res/image-20220301140534949.png" alt="image-20220301140534949" style="zoom: 50%;" /> | Akzeptierter Endzustand                                      |
| <img src="res/image-20220301140548641.png" alt="image-20220301140548641" style="zoom:50%;" /> | Übergangsfunktionen: Vom Zustand "0.50" kann zu "1.50" gelaufen werden |

### Nicht Deterministische Automaten (NEA)

Eine NEA kann es für einen Input und Zustand mehrere Übergänge geben (Übergangsfunktion: $\delta: Q\times \Sigma\rightarrow \mathcal P(Q)$). Es werden alle Möglichkeiten von der NEA durchprobiert. Eine NEA akzeptiert ein Wort, wenn eine Möglichkeit akzeptiert wird.

Eine $\varepsilon$-NEA ist eine NEA, welche den Zustand wechseln kann, ohne ein Input zu konsumieren (Übergangsfunktion: $\delta: Q\times \Sigma \cup \{\epsilon\}\rightarrow \mathcal P(Q)$)

Um eine $\varepsilon$-NEA in eine NEA umzuwandeln, muss überlegt werden, was für ein Zeichen als nächstes konsumiert  werden könnte und diese in den usprünglichen Übergang aufzunehmen.

### Teilmengenkonstruktion ($NEA \to DEA$)

1. Die Zustände sind die Potenzmenge von $Q_N$ (Potenzmenge:  $\mathcal P(\{0, 1\})=\{\emptyset, \{0\}, \{1\}, \{0, 1\}\}$)
2. Die potentielle Startzustand Kandidaten sind alle diese Teilmengen von $Q_N$, welche $q_0$ enthalten
3. Akzeptierte Zustände sind alle Teilmengen, welche ein Element aus $F_N$ besitzen
4. Aus den Zuständen und eingaben soll nun eine Tabelle gezeichnet werden. Bei dieser können alle Zustände gestrichen werden, welche nicht erreichbar sind. Also nie bei einer Eingabe-Spalte auftauchen. Dies muss solange wiederholt werden, bis nichts gestrichen werden kann. 
   Wenn $\{q_1\}$ in einer Eingabe-Spalte steht, heisst das nur, dass $\{q_1\}$ vorhanden ist. $\{q_1, q_2\}$ muss immer noch gestrichen werden, wenn es nicht selbst vorkommt
   Wenn eine Verbindung das leeres Wort nimmt, werden die Zustände, welche man vom leeren Wort Zustand erreichen kann, auch vom ursprünglichen Wort als erreichbar angesehen.
5. Die noch nicht gestrichenen Resultaten können nun Namen verteilt werden (z.B A-Z)

![image-20220301200210053](res/image-20220301200210053.png)

### DEA $\to$ RegEX

1. Für jeden Zustand eine separate Sprache definieren. Diese darf sich selbst referenzieren oder auch andere Sprachen
2. Kürzen und einsetzen. Meistens ist es am einfachsten von den Endzuständen zu kürzen zu beginnen

$$
\begin{align}
L_{q_0}&=(0|1)L_{q_0}|0L_{q_1}\Rightarrow(0|1)^*0L_{q_1}\Rightarrow(0|1)*01\\
L_{q_1}&=1L_{q_2} \Rightarrow1\varepsilon=1\\ 
L_{q_2}&=\varepsilon\\
\end{align}
$$

#### Arden'sches Lemma

> $L=UL|V\Rightarrow L=U^*V$, dabei ist $L$ eine Spraceh und $U$ einen andren Ausdruch

### Zustandsklassen

> $[p]=\{w \in \Sigma^*\vert M \text{ endet nach Lesen des Input-Worts } w \text{ im Zustand } p\}$, dabei ist $M$ einen Automaten, $w$ ein eingabe Wort und $p$ ein Zustand (nicht unbedingt der Endzustand)

### Untere Schranke für endliche Automaten

Die grundsätzliche Idee  ist, dass wenn die Worte $x$ und $y$ in derselben Zustandsklasse ist, dann ist $zx=zy$, wobei $z$ irgend ein Wort ist.

Es müssen nun die folgende Schritte gefolgt werden:

1. Es wird eine Annahme getroffen, wie viele Zustände eine Maschine benötigt
2. Es müssen für jeden Zustand ein Wort gefunden werden, welches in diesem Zustand endet
3. Es wird nun für jede Kombination von Wörter von Schritt 2. ein Prefix oder Postfix $z$ gefunden werden, welcher kombiniert mit dem einen Wort, ein Wort ergibt, welches in der Sprache ist und mit dem anderen Wort ein, ein Wort welches **nicht** in der Sprache ist
4. Wenn dies für jedes Wort von Schritt 2. getan werden kann, dann werden mindestens so viel Zustände benötigt.  Da wenn zwei Wörter mit demselben Wort verbunden wird und diese in unterschiedlichen Sprache sind, die zwei Wörter in unterschiedlichen Zustände endet.

## Kontextfreie Gramatik

>Die Kontextfreie Grammatik $G$ ist durch das Tupel $(N, \Sigma, P, A)$ definiert, wobei
>
>* $N$ das Alphabet der Nichtterminale (Variabeln)ist , welche mit Produktionen in $P$ aufgelöst werden können
>* $\Sigma$ das Alphabet der Terminale ist
>* $P$ eine endliche Menge von Produktionen in der Form $X \rightarrow \beta$ ist. Dabei ist der Kopf $X\in N$ und der Rumpf $\beta \in (N\cup\Sigma)^*$)  
>* $A$ das Startsymbol ist und gilt $A\in N$
>
>Geschrieben kann es folgendermassen:
>$$
>G_1=(\{A\}, \{0, 1\}, P, A) \\\text{wobei gilt: }\\
>P=\{A\rightarrow0A1,A\rightarrow\varepsilon\}
>$$
>Die Sprache $L(G)$ aus der Grammatik $G$ beinhaltet alle Wörter, die in $G$ aus dem Startsymbol $A$ ableitbar sind.
>$$
>L(G)=\{w\in\Sigma^* \vert A\overset{*}{\Rightarrow} w\}
>$$
>Eine Kontextfreie Grammatik wird **mehrdeutig** genannt, wenn es für ein Wort mehrere Ableitungsbäume gibt.
>
>Eine Sprache ist kontextfrei, wenn ein Kellerautomaten dazu gebaut werden kann.

<img src="res/image-20220315132416296.png" alt="image-20220315132416296" style="zoom:30%; float: right;" /> 

* Mehrere Ableitungsschritte: $A\Rightarrow AA \Rightarrow (A)A \Rightarrow (A)(A)\Rightarrow()()$ 
* Dies kann auch als: $A \overset*\Rightarrow w$ geschrieben werden. Dabei wird das Wort $w$ vom Symbol $A$ erzeugt/generiert.
* Ein Wort wird **ableitbar** gennant, wenn es eine Ableitung für dieses Wort gibt.
* Auf der Rechten Seite sieht ist ein Abbleitungsbaum. 
* **Linksseitig Ableiten**: Die am meisten linke Variable wird immer zuerst abgeleitet
* **Rechtsseitig Ableiten**: Die am meisten rechte Variable wird immer zuerst abgeleitet
* **eindeutige Gramatik**: Eine Gramatik, welche nur auf eine Art abgeleitet werden kann

## DEA zu kontextfreien Sprache

Es gibt eine DEA $M=(Q, \Sigma, \delta, q_0, F)$. Aus dieser kann eine kontextfreie Sprache erstellt werden:

1. Für jeden Zustand $q_i$ gibt es ein Nichtterminal $Q_i$
2. Für jede Transition $\delta(q_i, a)=q_j$ gibt es eine Produktion $Q_i\rightarrow aQ_j$
3. Für jeden akzeptierten Zustand gibt es eine Produktion $Q_i\rightarrow \varepsilon$
4. Das Nichtterminal $Q_0$ wird das Startsymbol

## Keller Automaten (KA)

>Ein deterministischer Keller Automaten (KA) wird als 7-Tupel dargestellt: $(Q, \Sigma, \Gamma, \delta, q_0, \$, F)$)
>
>* $Q$ ist die endliche Menge von Zuständen
>* $\Sigma$ ist das Alphabet der Eingabe
>* $\Gamma$ ist das Alphabet des Kellers (bzw. des Stacks)
>* $\delta: Q\times (\Sigma \cup \varepsilon) \times \Gamma\rightarrow Q\times\Gamma^*$ ist die (partielle) Übergangsfunktion
>* $q_0$ ist der Startzustand
>* $\$\in \Gamma$ ist ein ausgezeichnetes Symbol vom Alphabet des Stacks/Kellers
>* $F\subseteq Q$ ist die Menge der akzeptierten Zustände 
>
>Zu dem gilt für die Übergangsfunktion $\delta$, wenn $\delta(q, b, x)$ definiert ist, darf $\delta(q, \varepsilon, x)$ nicht definiert sein. Das heisst, das leere Wort darf nur benutzt werden, wenn für eine Stackposition kein anderes Symbol definiert ist. Dies stellt sicher, dass der Automat deterministisch ist.
>
>Zu begin der Ausführung ist im Strack $\$$, was ein leerer Stack darstellt.

<img src="res/image-20220326193950829.png" alt="image-20220326193950829" style="zoom:30%;" />

### Nichtdeterministischen Kellerautomaten (NKA)

> Eine NKA ist gleich wie eine KA, nur das die Übergangsfuntkion den Typ $\delta: Q\times (\Sigma \cup \varepsilon) \times \Gamma\rightarrow \mathcal P (Q\times\Gamma^*)$ hat. Der Rückgabetyp ist die Potenzmenge. Somit kann in der NKA ein Eingang mehrere Ausgänge haben.
>
> Wie auch bei einer NEA kann nun im $\varepsilon$ (das leere Wort) für $\Sigma$ in der Übergangsfunktion. 
>
> Nicht alle NKA können in eine KA umgewandlet werden. Auch gibt es kontextfreie Sprachen, welche nicht in eine KA umgewandlet können werden.

### Berechnungsschritte
<img src="res/image-20220326193612394.png" alt="image-20220326193612394" style="zoom:33%; float: right;" /> Die Berechnungssfunktion dazu wäre: $\delta(q, b, c)=(p, w)$
Dabei befindet sich der Automaten im Zustand $q$, list das Symbol $b$ von der Eingabe und wird das Kellersymbol $c$ vom Stack lesen und $w$ zurück schreiben. Der nächste Zustand wird $p$ sein.

### Berechnung

Eine Berechnung besteht aus mehreren Berechnungsschritte und eine Start- und Endkonfiguration.

Beispiel: $(q_0, 0011, \$) \vdash (q_0, 011, 0\$)\vdash (q_0, 11, 00\$)\vdash(q_1, 1, 0\$)\vdash(q_1, \varepsilon, \$)\vdash(q2, \varepsilon, \$)$ 
Dies kann auch als $(q_0, 0011, \$)\vdash^*(q2, \varepsilon, \$)$ geschrieben werden.

## Turing Machinen

> Eine (determinischtische) Turing-Maschine (DTM) ist ein 7-Tupel: $M=(Q,\Sigma, \Gamma, \delta, \textvisiblespace, F)$
>
> * $Q$: die endliche Menge von Zustände
> * $\Sigma$: das Eingabe Alphabet
> * $\delta: Q\times \Gamma \rightarrow Q\times\Gamma\times D, D=\{L, R\}$: Die Übergangsfunktion, welche den nächsten Zustand, was geschrieben werden soll und ob das Band nach Links (L) oder nach rechts (R) geschoben werden soll
> * $\Gamma$: Das Bandalphabet, dabei muss $\Sigma \subset \Gamma$
> * $\textvisiblespace$: Das Leerzeichen, dabei muss $\textvisiblespace \in \Gamma$ und $\textvisiblespace \not \in \Sigma$
>
> Das Band hat einzelne Zelle, in welchen ein Zeichen von $\Gamma$ enhaltet...
>
> Berechnungen werden folgendermassen dargestellt: $X_1,...X_{i-1}qX_iX_{i+1},...,X_n\vdash X_1,...X_{i-1}pX_iX_{i+1},...,X_n$
> Der aktuelle Zustand ist in der Mitte ($q$ bzw. $p$). Abgekürzt wird es als $K_1\vdash^* K_n$ geschrieben
>
> Eine Sprache, welche von einer TM akzeptiert wird, nennt sich **rekursiv aufzähltbar**

<img src="res/image-20220322133915768.png" alt="image-20220322133915768" style="zoom:33%; float: right;" />Im folgenden Bild wird eine Übergangsfunktion einer Turing Maschine gezeigt: $\delta(q_1, X)=(q_2, Y, D)$, wobei $D\in\{L, R\}$

### Modifikationen

* Mit zusätzlichem Speicher
* Mit mehreren Spuren, welche auf einem Band sind (ein Lese/Schreibkopf)
* Mit mehreren Bändern (mehrere Lese/Schreibköpfe) (Übergangsfunktion: $\delta:Q\times\Gamma^k\rightarrow Q\times \Gamma^k \times \{R, S, L\}^k$)
* Nicht deterministische Turning Machine
  Übergänge müssen nicht einzigartig sein (wie bei NEAs) (Übergangsfunktion: $\delta: Q\times \Gamma \rightarrow \mathcal P(Q \times \Gamma \times \{R, L\})$
  Nicht deterministische TMs sind gleich mächtig, wie deterministische TMs.
* Mit semi-beschränktem Band
  Das Band ist nur unendlich in eine Richtung. Eine Semi-beschränkte TM ist gleich mächtig, wie eine TM. (Beweissidee: Eine semi-beschränkte TM mit zwei bänder, eines für die positive und eines für die negative Seite)
* $k$-Stack Machine
  Eine Deterministischer Kellear Automat mit mehreren Stacks (Übergangsfunktion: $\delta: Q \times \Gamma_1\times...\times\Gamma_n\rightarrow Q\times\Gamma_1^*\times...\times \Gamma^*_k$)
  Eine 2-Stack Machine kann ein Band simulieren (Ein Stack für die negative und ein Stack für die positive Seite) und ist demnach gleich mächtig, wie eine TM
* Zähler-Machine (Hat Zähler einer natürlichen Zahl ($n \ge 0$) anstatt Stacks)
  Ein 2-Stack kann mit mit 3-Zähler ersetzt werden und daher ist ein Zähler-Machine gleich wertig, wie eine TM. 
  Dafür wird jedem Symbol des Stacks eine Zahl zugeordnet (1, 2, 3, 4, ...). Der aktuelle Wert wird mit der Anzahl Symbolen multipliziert und mit dem nächsten Symbol addiert ($c_{new}=c_{old}\cdot length + s$). Beim dekodieren wird der Wert durch die Anzahl Symbole geteilt und der Rest ist das aktuelle Symbol. 
  Diese 3-Zähler Machine kann mit einer 2-Zähler Machine simuliert werden, in dem die 3-Zähler mit der Encodierung $2^i\cdot 3^j\cdot 4^k$ enkodiert werden und mit einer Primfaktorzerlegung dekodiert werden. Ein Zähler wird noch zum Rechnen benötigt.

### Universelle Turning Maschine (UTM)

Eine Turing Maschine, welche andere Turning Maschinen simulieren kann. Alle Zustände werden Unär-Kodiert (0 = 1, 00 = 2, 000 = 3, ...) mit dem Trennzeichen `1` 

Dabei wird folgendes gespeichert: Die Übergangsfunktion $\delta(q_i, X_j)=(q_k, X_l, D_m)\to 0^i10^j10^l10^m$. Einzelne Übergansfunktionen werden mit `11` getrennt. Die Machine wird mit `111` vom Input getrennt.

## Berechnungsmodelle

## Entscheidbarkeit

## Komplexitätstheorie

