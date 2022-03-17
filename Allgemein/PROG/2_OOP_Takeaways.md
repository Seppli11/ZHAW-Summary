# OOP Takeaways

## Wieso Getters und Setters

Getters und Setters haben mehrere Vorteile:

* Validation  kann sehr einfach eingebaut werden, auch im Nachteil

* Die interne Struktur kann ändern, ohne dass sich die öffentliche Schnittstelle ändern muss

* es ist Konvention

## Demeters Law

(source: [Law of Demeter - Wikipedia](https://en.wikipedia.org/wiki/Law_of_Demeter))

Das Law of Demeter besagt folgendes:

* Jede Einheit sollte nur limitiertes Wissen über andere Einheiten haben

* Eine Einheit spricht nur mit seinen Freunden, nicht Fremde.

Zum einen führt dies dazu Klassen nur so viel wiessen, wie umbedingt nötig, aber auch zu kleinen Schnittstellen. Anstatt `a.getB().getName()` würde man die Methode `a.getBName()` erstellen, welche den Aufruf weiter delegiert. Man sollte also nicht durch andere Methoden "durch greiffen"

Formaler: 

Eine Methode `m` auf dem Objekt `a`, solte nur auf folgendes zugreiffen:

* `a` selbst 

* `m`'s Parameter

* Lokale Variabeln von `m`

* Attribute von `a`

Folgendes sollte vermiden werden: `a.m().n()`

### Vorteile

Die Vorteile von Demeters Law sind, dass es zu Relationen kommt, welche nicht auf interne Strukturen anderen Objekte abhängig sind. Dies kommt davon, dass Aufrufe delegiert werden und somit auch abstrahiert.

### Nachteile

Es gibt duplizierten Code, da man zum Teil delegieren muss. 

Wenn man Demeters Law auf der Klassenebenen anwendet, kann es zu grossen Schnittstellen führen, da man eine Klasse um delegierende Methoden erweitern. Wenn man ein Attribute wie `a.b().c()` benötigt, anstatt `a.c()` zu hinzufügen, kann man sich auch überlegen der Klasse ein Attribute `c` hinzuzufügen. Damit die Kohäsion nicht alzufest leidet, können auch Methoden umbenannt werden, so dass sie besser zur Klasse passen (Spieler delegiert das Inventar zu einer Rucksackklasse. Die Methode `addItem(Item)` könnte zu `pickUpItem(Item` umbenannt werden, was wieder gut zu `Player` passen würde)

## Kohäsion

Kohäsion beschreibt, wie gut eine Methode oder Klasse eine logische Aufgabe oder Einheit abdeckt. 

Als Beispiel: Wenn eine `Calculator` Klasse die Methoden `add(int, int)`, `sub(int, int)`, `showGui(int)` hat, dann hat sie eine tiefe Kohäsion, da `showGui(int)` wenig mit der Calculator Klasse zu tun hat.

Als Hilfe kann man sich immer Fragen: Gibt es ein passenden Klassennamen für diese Klasse?

Der Vorteil von einer hohen Kohäsion ist, dass eine Klasse oder Methode wiederverwendbarer wird, da sie nur etwas macht und es so wahrscheinlicher ist, dass dieselbe Klasse oder Methode mehrmals verwendet werden kann.

## Koppelung

Koppelung beschreibt, wie fest Klassen abhängig von einander sind. Grundsätzlich ist eine tiefere Koppelung besser, da so Änderungen sich nicht durch die ganze Codebasee ziehen. Dafür möchte man möglichst kleine Schnittstellen, da so die Abhängigkeitsmöglichkeiten von einer Klasse reduziert werden.

Der Vorteil von einer loser Kopplung ist, dass sich Änderungen an einer einzelnen Klasse einfacher durchführen lassen, da diese Änderungen mehr lokale Auswirkungen haben anstatt globale.

## Polymorphie
