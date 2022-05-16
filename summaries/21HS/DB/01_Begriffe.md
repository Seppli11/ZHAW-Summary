#  Begriffe

*in Tabelle formatieren*

| Name         | Erklärung                                        | Beispiel                                               |
| ------------ | ------------------------------------------------ | ------------------------------------------------------ |
| Domäne       | Wertebereich                                     | Domäne von PLZ wären die Zahlen 0-9999                 |
| Attribute    | Eigenschaft / Spalte / besteht aus Name + Domäne |                                                        |
| Attributwert | Feld                                             | z. B. der Ort                                          |
| Tupel        | eine Zeile/Eintrag                               | ein 3-er Tupel ist ein Tupel bestehend aus 3 Attribute |

- Format, Schema, Heading, Relationsvariable
- Relation -> mehrere Spalten (auch von mehreren Tabellen)
- Schlüssel -> Eindeutige Möglichkeit, einen Datensatz zu identifizieren
- Relation -> Relationsenformat (Menge von Namen von Attributen) & Ausprägung 

Wichtig:

- In einem Modell gibt es NIE genau gleiche Zeilen
- In einem Format gibt es NIE zwei gleiche Attribute
- Die Reihenfolge der Zeilen (Tupel) und Spalten(Attribute(Attribute)) ist irrelevant

# Notation

- Tabellarisch
- {<1, Meier, 19.4.2001>, <2, Müller, 23.5.2302>}

# Schlüssel

- Primärschlüssel
  - ein ausgewählter Schlüsselkandidat
- Fremdschlüssel
  - Referenziert einen Primärschlüssel

### Primärschlüssel vs Unique-Key

Es kann maximal **ein** Primärschlüssel pro Tabelle geben (einen zusammengesetzter Primärschlüssel ist immer noch ein Schlüssel). Zusätzlich wird automatisch ein Index erstellt, so dass die DB eine Tupel schneller findet.

## ACID

### 
