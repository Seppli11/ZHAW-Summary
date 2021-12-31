Notation für das Format einer Relation:
$R(A_1, A_2, ..., A_n)$

Wenn die Werte selbst dargestellt weden, soll folgendes Format verwenden werden: {<1, Meier, 19.4.2001>, <2, Müller, 23.5.2302>}

# Äquivalenz

Zwei Relationen sind äquivalent, wenn sich durch eine Umordnung beide Relationen darstellen lasst
Die Reihenfolge der Tupeln ist irrelevant.

Notation: $R_1 \sim R_2$

# Operation

In der Mengenlehre werden Duplikate immer gleich entfernt. Ein SQL-Server typischerweise nicht

## Entfernende Operatoren

### Selektion

- Symbol: $\sigma$; in SQL: WHERE
- $R' = \sigma_{Selektionsbedingung}(R)$
- $\sigma_A(\sigma_B) = \sigma_B(\sigma_A)$
- Wenn die Bedinung immer falsch ist, wird eine leere Relation zurück gegeben
- Entfernt Tupels, welche nicht dem Prädikat entsprechen
- Das Format der Relation ändert sich nicht, ist aber eine neue Relation
- Wenn die Bedingung auf kein Tupel zutrifft, dann ist das Ergebnis eine leere Relation
- Beispiel:
  - $\sigma_{Länge>100}(Filme)$ -> Alle Filme, welche eine grössere Länge als 100 haben
  - $\sigma_{City = 'Zürich' \wedge Discount \geq 0.15}(Customers)$ -> Finde alle Züricher Kunden, die einen Rabatt von 15% oder mehr erhalten

### Projektion

- Symbol: $\pi$; in SQL: `SELECT`
- $R'=\pi_{Spalten}(R)$
- $\pi_A(\pi_B) \neq \pi_B(\pi_A)$
- erzeugt eine neue Relation mit weniger Spalten
- *!Duplikate in der neuen Relation werden entfernt!*
- Gibt es das angegebenen Attribut nicht, ist dies ein Fehler und keine Relation wird zurück gegeben
- Beispiel:
  - $\pi_{Titel, Jahr, Länge}(Filme)$ -> Gibt eine neue Relation zurück, mit den Attributen Titel, Jahr und Länge

Die Projektion kann erweitert werden, dass man zusätzlich zu Attribute, auch Ausdrücke (wie $\pi_{2\cdot R.A+4\to Z}(R)$) oder Konstante (wie $\pi_{5 \to S, A \to B, C}(R)$) angegeben. Dies kommt dem `SELECT` Syntax von SQL näher.

## Umbenennung

- Symbol: $\rho$; in SQL: `AS`
- $\rho_{S(C,D)}(R(A, B))=S(C, D)$

## Produkt-Operatoren

Fügt Attribute zusammen

### Kartesisches Produkt (auch Cross-Join)

- Symbol $R \times S$; SQL: `CROSS JOIN`
- Kombiniert alle Tupples von R mit allen Tupples von S
  
### Natural Join

- Symbol: $\bowtie$; Latex: \bowtie; SQL: `NATURAL JOIN`
- $R \bowtie S$ 
- Die gleichen Attribute werden verglichen
- In SQL ist Join nicht kommuntativ (die Reihenfolge stimmt nicht)
- Wenn zwei Tabellen "gejoint" werden, welche keine gemeinsammen Attribute haben, wird das kartesische Produkt gebildet

### Theta-Join

- Symbol: $\bowtie_P$
- Ist eine Verallgemeinerung von einem Natural-Join, da bei diesem Join eine Bedingung angegeben werden können
- Beispiele:
  - $\bowtie_{P (A > B \wedge R.D = S.D)}$

### Semi-Join

Ein Semi-Join ist ein Natural-Join, auf welchen danach eine Projektion angewendet wurde: $\pi_{r_1,...,r_n}(R_1 \bowtie R_2)$

### Left-Outer-Join

![image-20211229134551849](res/image-20211229134551849.png)

Alle Resultate von der Relation auf der linken Seite werden übernommen, selbst wenn es auf der rechten Seite kein Tuppel gibt, welches passt. In diesem Fall werden anstatt Werte `NULL` ausgegen.

### Right-Outer-Join

![image-20211229134602100](res/image-20211229134602100.png)

Es werden Alle Resultate von der Relation auf er rechten Seite übernommen. Wenn es kein Tupel aus der linken Relation gibt, wird anstelle `NULL` ausgeggeben.



### Full-Outer-Join 

![image-20211229134448540](res/image-20211229134448540.png)

Bei einem Full-Outer-Join werden alle Werte von beiden Relationen ausgegeben. Wenn auf der einen Seite kein passendes Tupel existiert, wird anstelle `NULL`  ausgegeben.

### Mengen Operatoren

- Fügt Tupels zusammen

- Bei allen Mengen-Operatoren müssen die Relationen das gleiche Schema haben. Zudem werden die Duplikate immer heraus gefilteret.
  
### Vereinigung ($\cup$)

- Symbol: $\cup$; Latex: \cup; SQL: `UNION`
- Gibt alle Einträge von beiden Mengen zurück. Duplikate werden entfernt
- Beide Relationen, welche vereinigt werden, müssen dasselbe Schema haben

Wenn die Vereinigung in Bag-Algebra durchgeführt wird, werden die Duplikate eines Tupels der linken und rechten Seite gezählt und alle Duplikate dieses Tupels von der Seite mit mehr Duplikaten genommen. Die doppelten Tupels der anderen Seite werden verworfen.

#### Bag Concatenation ($\sqcup$)

Ist ebenfalls eine Vereinigung, die Behandlung von Duplikaten ist allerdings anderst als beim $\cup$ Operator. Es werden die Duplikaten von beiden Seiten genommen.

### Durchschnitt ($\cap$)

- Symbol: $\cap$; Latex: \cap; SQL: `INTERSECT`
- Gibt alle Einträge zurück, welche in beiden Mengen vorhanden ist
- Beide Relationen, welche durchschnitten werden, müssen dasselbe Schema haben

Wenn der Durchschnitt in Bag-Algebra durchgeführt wird, werden die duplikate Tupels übernommen, von denen es weniger gibt.

### Differenz ($\setminus$)

- Symbol: $R \setminus S$; SQL: `EXCEPT`
- Gibt alle Tupels zurück, welche in R sind, **aber nicht S**
- Beide Relationen, welche differenziert werden, müssen dasselbe Schema haben

Wenn die Differenz in Bag-Algebra durchgeführt wird, werden die Duplikate eines Tupels der rechten Seite von der linken Seite abgezogen.

### Duplikatelimitation ($\delta$)

Entfernt die Duplikate einer Relation. Dieser Operator wird nur verwendet, wenn mit Bags gerechnet werden.

# Aggregationen

## Gruppieren

- Bildet Gruppen, auf welche die Aggregations-Funktion angewandt wird