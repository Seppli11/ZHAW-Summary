## Frage 1

- Die Anforderung wurden aller erstes abgeklärt und dokumentiert. Der Zeitafuwand war minimal und lohnte sich
- Die Architektur benötigte mehr Aufwand (ca. 6h) und war etwas schweiriger. Der Aufwand lohnte sich eindeutig da die Umsetzung dadurch klarer wurde.
- Logischerweise war die Implementation der aufwändigste Teil des Projekt. Dank unserer guten vorbereitung und voherigen Erfahrungen mit dem selben Team, gab es keine nennenswerte Blocker.
- Im vergleich zur Implementierung benötigte das Testing weniger Zeit. Die Einführung eines CI/CD (Drone) vereinfachte den Testing-Prozess drastisch.
- Da es nur einen Release gab, waren automatisierte builds überflüssig.
- Der Rollout war sehr simpel, da unser Projekt ein self-contained JAR-File ist und nur das Programm ersetzt werden muss. Optional können User ein expansion pack herunterladen.
- Da alle verbindlichen Requirements erfüllt wurden, ist weitere Wartung nicht nötig.

## Frage 2
Grundsätzlich Ja. Das Planen hat immer viel Zeit eingenommen, hat sich aber beim Implementieren bezahlt gemacht, da es einfacher war, das Projekt auf zuteilen. Wir brauchten ein Wasserfall-Model.

Ich denke, unsere Planung hat sich so bewährt. Wie immer, wurde die Zeit am Ende knapp. 

## Frage 3
Die Requirementsprozess wurde basierend von den Use-Cases der Applikation gemacht. Die Requirements wurden als Punktliste aufgezeigt Das Dokument war nachvollziehbar, allerdings wurde in Umgangssprache dokumentiert, weshalb die Qualität mässig gut ist.

Bei der Umsetzung konnte jedes Requirement erfüllt werden. Während der Umsetzung wurde nichts an den Requirements geändert.

## Frage 4
 Software-Architektur und Design erstellt? Was waren die wichtigsten Einflussfaktoren für die Wahl einer  Architektur? Haben Sie Forward- oder Reverse Engineering durchgeführt?

- Artefakte
     - Ausführbare `.jar`-Dateien
          Expansion-Pack
     - UML-Diagramm
          okumentation inkl. Bildmaterial
- Architekturwahl
     - Vorbesprechung und Ausarbeitung eines ersten UML-Diagramms
     - Das Projekt wurde von uns selbst entwickelt, es wurde folglich kein Reverse-Engineering durchgeführt
## Frage 5
In den meisten Fällen verwendeten wir eine Kombination von Unit-Tests, Mock-Tests und Exploratives Testing.  
Getestet wurden Komponenten, die viel komplexe Logik beinhalten. Dank der Einführung von SonarQube, konnten wir einige Bugs und Code Smells vorzeitig erkennen. Laut dem Coverage-Report haben wir eine Test-Coverage von 50%.  
Nicht-funktionale Features haben wir nicht getestet.

## Frage 6
Das Projekt wurde mit einem README, JavaDoc und einem UML Klassen-Diagramm. Das README enthielt einen Überblick und eine Anleitung für End-Andwender.
   Wir haben ein Klassendiagramm vor der Implementierung erstellt, welches für die Planung und Aufteilung von Aufgaben benutzt wurde und sehr nützlich war. Ein weiteres Klassendiagramm wurde nach der Implementation erstellt, da dies eine Anforderung war.


   Das Klassendiagramm war, für unsere Zwecke, vermutlich ein wenig zu ausführlich.

   Bei einem grösseren Projekt, würde ein Anwendungsfall-Diagramm erstellt werden. Es würde ein grobes Klassendiagramm geben und für Sub-Komponente genauere Klassendiagramma. Wenn nötig, bei z.B. komplexen Zustandsdiagramme und Aktivitätsdiagramme.

   Dies hängt von Betrieb ab. In meinem Lehrbetrieb haben wir ausführliche Beschreibungen im jeweiligen Arbeitsticket, was unterumständen mit UML-Diagrammen ergänzt wird. Bei grösseren Features gab es Design-Sitzungen dafür.

## Frage 7
Im PM2-Projekt haben wir alle parallel zu unseren zugewiesenen Rollen entwickelt. Sebastian übernahm das Management von den Projekten. Jonas wurden aufgrund seiner Kenntnisse von Designs und Grafiken zum Grafik Designer der Gruppe. Manuel schaute auf die Qualität des Codes bzw. der Pull Requests und Michael übernahm die Dokumentation des Codes.

In grösseren Projekten wird typischerweise eine Person das Management vom Projekt zugewiesen. Das Projekt wird in kleinere Aufgaben aufgeteilt und dann den Mitglieder zugewiesen.

## Frage 8
Für Projekte grösseren Formats ist die geschilderte Strukturierung besser geeignet als unsere Arbeitsweise, die wir während PM1 und PM2 pflegten.

## Frage 9
In der ersten Dimension (Requirements) waren wir uns alle sehr einig was gemacht werden muss und würden bei "Simple" platzieren. Bei der zweiten Dimension (Technology) platzieren wir uns ehere bei "Complicated" da unsere GUI-Lösung einen sehr seltenen use-case deckt.