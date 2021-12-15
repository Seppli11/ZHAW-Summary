# Integritätsregeln

![](/res/2021-12-06-08-10-27-image.png)

Wichtig anzumerken, nur weill die Datenbank konsistenz ist, heisst nicht, dass die Daten darin korrekt sind.

## Überprüfbare Regeln

* **Bereichintegrität**
  Das DB-System stellt sicher, dass der Wert eines Attributes in einem Wertebereich ist. Dafür können z.B. `NULL` und `NOT NULL`, wie auch Domänen verwendet werden

* **Entitätsintegrität**
  Der Primätschlüssel kann nicht leer sein. Also nicht `NULL`

* **Refentielle Integrität**
  Der Wert eines Fremdschlüssel muss `NULL` sein oder **genau einen** Primärschlüssel referezieren

* **Constraints**
  Zusätzlich können Constraints geschrieben werden, um weitere Bedingungen zu überprüfen. Siehe [SQL](04_SQL.md)
