Notation für das Format einer Relation:
$R(A_1, A_2, ..., A_n)$

Wenn die Werte selbst dargestellt weden, soll folgendes Format verwenden werden: {<1, Meier, 19.4.2001>, <2, Müller, 23.5.2302>}

# Äquivalenz

Zwei Relationen sind äquivalent, wenn sich durch eine Umordnung beide Relationen darstellen lasst
Die Reihenfolge der Tupeln ist irrelevant.

Notation: $R_1 \text{\textasciitilde} R_2$

# Operation

In der Mengenlehre werden Duplikate immer gleich entfernt. Ein SQL-Server typischerweise nicht

## Entfernende Operatoren

### Selektion

- Symbol: $\sigma$; in SQL: WHERE
- $R' = \sigma_{Selektionsbedingung}(R)$
- $\sigma_A(\sigma_B) = \sigma_B(\sigma_A)$
- Entfernt Tupels, welche nicht dem Prädikat entsprechen
- Das Format der Relation ändert sich nicht, ist aber eine neue Relation
- Wenn die Bedingung auf kein Tupel zutrifft, dann ist das Ergebnis eine leere Relation
- Beispiel:
  - $\sigma_{Länge>100}(Filme)$ -> Alle Filme, welche eine grössere Länge als 100 haben
  - $\sigma_{City = 'Zürich' \wedge Discount \geq 0.15}(Customers)$ -> Finde alle Züricher Kunden, die einen Rabatt von 15% oder mehr erhalten

### Projektion

- Symbol: $\pi$; in SQL: SELECT
- $R'=\pi_{Spalten}(R)$
- $\pi_A(\pi_B) \neq \pi_B(\pi_A)$
- erzeugt eine neue Relation mit weniger Spalten
- !Duplikate in der neuen Relation werden entfernt!
- Beispiel:
  - $\pi_{Titel, Jahr, Länge}(Filme)$ -> Gibt eine neue Relation zurück, mit den Attributen Titel, Jahr und Länge

## Umbenennung

- Symbol: $\rho$; in SQL: AS
- $\rho_{S(A,B)(R)=R}

## Produkt-Operatoren

Fügt Attribute zusammen

### Kartesisches Produkt (auch Cross-Join)

- Symbol $R \times S$; SQL: *tbd.*

- Kombiniert alle Tupples von R mit allen Tupples von S
  
  ### Natural Join

- Symbol: $\bowtie$; Latex: \bowtie; SQL: tbd

- $R \bowtie S$ 

- Die gleichen Attribute werden verglichen

- In SQL ist Join nicht kommuntativ (die Reihenfolge stimmt nicht)

- Wenn zwei Tabellen "gejoint" werden, welche keine gemeinsammen Attribute haben, wird das kartesische Produkt gebildet

### Theta-Join

- Symbol: $\bowtie_P$
- Ist eine Veralgemeinerng von einem Natural-Join, da bei diesem Join eine Bedingung angegeben werden können

Biespiele:

- $\bowtie_{P (A > B \wedge R.D = S.D)}$

### Semi-Join

### Auto-Join

### Left-Outer-Join

### Right-Outer-Join

### Full-Outer-Join

## Mengen Operatoren

- Fügt Tupels zusammen

- Bei allen Mengen-Operatoren müssen die Relationen das gleiche Schema haben. Zudem werden die Duplikate immer heraus gefilteret.
  
  ### Vereinigung

- Symbol: $\cup$; Latex: \cup; SQL: tbd

- Gibt alle Einträge von beiden Mengen zurück. Duplikate werden entfernt

### Durchschitt

- Symbol: $\cap$; Latex: \cap; SQL: tbd
- Gibt alle Einträge zurück, welche in beiden Mengen vorhanden ist

### Differenz

- Symbol: $R \setminus S$; SQL: tdb
- Gibt alle Tupels zurück, welche in R sind, **aber nicht S**

# Aggregationen

## Gruppieren

- Bildet Gruppen, auf welche die Aggregations-Funktion angewandt wird