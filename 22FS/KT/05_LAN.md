# LAN

LAN steht für Local Area Network ist ein räumliches begrenztes Netzwer.

## Topologien

### Bus-Topologie

Alle Geräte sind direkt am Übertragungsmedium angeschlossen und werden nur aktiv, wenn sie senden.

![image-20220314100927048](res/image-20220314100927048.png)

### Linien-Topologie

Bei der Linien-Topologie sind die jeweils benachbarten Knoten miteinander verbunden. Wenn eine Nachricht von A zu D  geschickt wird, muss sie von B und C weiter geleitet werden. 

Diese Topologie ist zudem recht anfällig, da wenn ein Knoten aussteigt, die Verbindung unterbrochen ist.

![image-20220314100938580](res/image-20220314100938580.png)

### Ring-Topologie

Eine Ring-Topologie wurde eine Linien-Topologie an den Enden verbunden. Dies verbessert die Redundanz, da bei einem Ausfall, jeder Knoten von der anderen Seite erreichbar ist. Um die Redundanz noch weiter zu erhöhen, wird manchmal auch eine doppelte Ring-Topologie verwendet.

Bei der Ring-Topologie muss sichergestellt werden, dass sich eine Nachricht nicht im Kreis dreht.

<img src="res/image-20220314101155801.png" alt="image-20220314101155801" style="zoom:50%;" /><img src="res/image-20220314101308636.png" alt="image-20220314101308636" style="zoom:50%;" />

### Stern-Topologie

Bei der Stern-Topologie geht alles über einen Switch oder Hub. Dies hat zur folge, dass ein Knoten aussteigen kann ohne, dass das ganze Netzwerk lahm gelegt wird. Allerdings wenn der Switch oder Hub aussteigt, kann nicht mehr kommuniziert werden.

![image-20220314101358307](res/image-20220314101358307.png)

### Baum-Topologie

Die Baum-Topologie kann aus mehreren Stern-Topologien hergestellt werden.

![image-20220314105057184](res/image-20220314105057184.png)

## Übertragungsarten

| Art       | Erklärung                                                    |
| --------- | ------------------------------------------------------------ |
| Unicast   | Ein Paket hat wird genau an ein Ziel gesendet. Das Paket wird mit einer Adresse ausgestattet, so dass es am Ziel sicher ankommt. |
| Broadcast | Das Paket wird an alle Knoten im Netzwerk gesendet. Das Paket wird mit einer Broadcast-Adresse ausgestattet |
| Multicast | Das Paket wird an eine Gruppen von Knoten gesendet.          |

## IEEE Namensgebung

![image-20220314110750571](res/image-20220314110750571.png)

* 1000BASE-T = Ethernet mit Basisband-Kanalcodierung mit einer Bitrate von 1Gbit/s mit Twisted-Pairs
* 10BASE5= 10Mbit/s Basisband-Ethernet mit max 500m Segmentenlänge

## Manchester-Codierung (10Mbit/s)

In Ethernet wird die Manchester-Codierung zwischen 0V und -2V angewendet.

* Eine steigene Flanke ist eine `1`
* eine sinkende Flanke ist eine `0` 

Um z.B. zwei `1`  senden zu können, muss nach dem ersten `1` zuerst auf -2V gehen, damit eine zweite steigende Flanke gebildet werden kann. Da diese sinkende Flanke ausserhalb des Clocksignal ist, erkennt der Sender dies nicht.

Ein Nachteil der Manchester-Codierung ist, dass nur die Hälfte der Bandbreite genutzt werden kann, da für zwei `1` das Signal 4 Flanken machen muss. Daher wird bei Geschwindigkeit höher als 10Mbit/s **keine** Manchester-Codierung verwendet

![image-20220314144944190](res/image-20220314144944190.png)

## NRZ-I (100Mbit/s)

* bei einer `1` wechselt der Pegel
* bei einer `0` bleibt der Pegel 

![image-20220314150226345](res/image-20220314150226345.png)

## Shared-Ethernet

Das ursprüngliche Ethernet wurde für eine Bus-Topologie entwickelt. Dabei wurden Koaxial-Kabel verwendet, welche angebohrt wurden (Daher auch der Name Tick-Wire-Ethernet)

![image-20220314111623939](res/image-20220314111623939.png)

## 