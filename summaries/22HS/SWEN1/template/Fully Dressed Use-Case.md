# Use-Case 

## Use-Case-Name

Buchung einchecken

## Umfang (Scope)
Ein Terminal für das ein checken des Nutzers für ein Hot

## Ebene (Level)

Anwenderziel

## Primärakteur (Primary Actor)
*(Die Primärakteure und wer den Use-Case initiert)*

Kunde

## Stakeholders und Interessen
*(Für wen den Use-Case sonst noch relevant ist und welche Interesse diese haben)*

Hotel-Inhaber

## Vorbedingungen (Preconditions)
*(Voraussetzungen, damit der Use-Case ablaufen kann)*

* Kunde hat eine BuchungsNr
* Die BuchungNr ist valid zur Zeit des Ein-Checken

## Erfolgsgarantie/Nachbedingungen (Success Guarantee)

*(Was* nach der Ausführung gewährleistet werden muss)*

* Ein Zimmer wurde einer Buchung zugewiessen
* Der Nutzer hat Karten für sein Zimmer erhalten

## Standardablauf (Main Sucess Scenario)
*(Der "normale" Ablauf in einer nummerierten Liste, aber keine Lösungsdetails und aktive S)*

1. Kunde nähert sich dem Terminal
2. Der Kunde teilt dem Terminal seine Buchungs Nr mit
3. Das System sucht die entsprechende Buchung und validiert sie
4. Der Kunde muss seine Kundendaten und Buchungsdaten bestätigen
5. Das System sucht ein Zimmer mit der entsprechender Kategorie der Buchung
6. Das Zimmer wird der Buchung zugewiessen
7. Der Kunde wird dazu aufgefordert eine Karte zu nehmen und diese zu scannen
8. Sobald der Kunde ein Karte scannt, wird diese der Buchung und dem Zimmer zu geordnet
9. Falls der Kunde weitere Karten scannt, wird schritt 7 wiederholt
10. Der Kunde wird verabschiedet

## Erweiterungen (Extensions)

*(Alternative Erfolgs- und Misserfolgsszenarien)*

3b) Falls die Buchung nicht valide ist oder nicht existiert wird ein Fehler angezeigt und der Prozess wird beendet

5b) Falls kein Zimmer gefunden wird, wird die Zentrale benachrichtigt, dies wird dem Nutzer mitgeteilt und der Prozess wird beendet

*b) Falls der Nutzer während des Prozesses weglauft, wird nach einem Timeout den Prozess abgebrochen und die Zentrale gepingt.

## Spezielle Anforderungen (Special Requirements)

## Liste der Technik und Datavariationen
(Technology and Data Variations)

## Häufigkeit des Auftretens (Frequency of Occurance)

ca 200-500 mal pro Tag total für alle Hotels

## Verschiedenes (Miscellaneous)