# Network Layer (Layer 3)

## IP-Adressen

Mit hilfe von IP-Adressen routen Router die Pakete umher. IP-Adressen sind hirarchisch aufgebaut.

### Classful vs Classless

| Klassen | Adressbereich               | Anzahl Netze | Interfaces pro netz |
| ------- | --------------------------- | ------------ | ------------------- |
| A       | 1.0.0.0 - 127.255.255.255   | 127          | 16'777'214          |
| B       | 128.0.0.0 - 191.255.255.255 | 16'384       | 65'534              |
| C       | 192.0.0.0-223.255.255.255   | 2'097'152    | 254                 |

Die Klasse D (224.0.0.0 - 239.255.255.255) sind für Multicast-Adressen vorgesehen. Dies ist ein separates Protokoll mit separaten Adressierung.

Die Klasse E (224.0.0.0 - 255.255.255.255) ist reserviert für zukünftige Netzwerke.

Die folgenden privaten Netzwerke gibt es:

| Klasse | Netzadresse                 | Subnetmaske   |
| ------ | --------------------------- | ------------- |
| A      | 10.0.0.0                    | 255.0.0.0     |
| B      | 172.16.0.0 - 172.31.0.0     | 255.255.0.0   |
| C      | 192.168.0.0 - 192.168.255.0 | 255.255.255.0 |

### Netmask

Die IP-Adresse ist in zwei Teile aufgeteilt: Die Netzadresse und Host-Adressen. Die Netzmaske unterteilt eine IP-Adresse in die Netzadresse und Hostadresse.

![image-20220404142700439](res/image-20220404142700439.png)

Alternativ schreibweisse ist "/24" für eine Subnetzmaske mit 24 `1` und 8 `0`. Daher gibt es $(32-24)^2-2=255-2=253$ addressierbare Hosts. Es werden noch zwei Adressen abgezogen, da zwei Adressen für die Broadcast- und Netzwerk-Adresse benötigt werden.

## Routing

Dank routing weiss ein Router wohin ein Paket gesendet werden muss. Dies wird anhand der IP-Adresse gemacht.

### Routing-Tabelle

![image-20220404144551122](res/image-20220404144551122.png)

In der Routing-Tabelle steht, über welcher Port welches Netzwerk ansprechbar ist. Darin steht der Port, an dem das Netzwerk erreichbar ist, die Netzwerkadresse und Netzmaske. Zusätzlich gibt es ein Default-Gateway. Über diesen werden alle Pakete weitergeleitet, welche zu keinem anderen Netzwerk passt. Es kann für ein Netzwerk mehrere Einträge geben. **TODO**

Die Routing-Tabelle ist geordnet nach der Netzmaske. Dabei ist das kleinste Netzwerk zu oberst (die höchste Subnetz). Die Routing-Tabelle wird von oben nach unten durch geschafft. Zum ersten Hit wird das Paket gesendet.

## Flaches- vs Hirarchisches- Routing

## Internet Protokoll (IP) Format

Das folgende Diagramm zeigt der Header des IP-Protokolles:

![image-20220404150046740](res/image-20220404150046740.png)

**TODO**

## Addressauflösung

**TODO**

### Address Resolution Protocoll (ARP)

![image-20220411150357003](res/image-20220411150357003.png)

ARP ist ein Layer 2 Protokoll, da es die Namensauflösung von IP-Adressen zu MAC-Adressen zulässt.

Geräte haben typischerweisse eine ARP-Tabelle, in welcher ARP-Responses gecachet weden.

**TODO: Beispiel**

#### Gratuitous ARP

Gratuitous heisst unnötigt/unbegründet.

**TODO**

## Fragmentieren und Reassembly

Fragmentieren wird gebraucht, wenn ein Paket über eine Leitung geschickt werden soll, welches weniger **TODO**

## Internet Control Message Protocol (ICMP)

ICMP Pakete werden der Schicht 3 zugeordnet, obwohl sie in einem IP-Paket gekapselt werden.

Es gibt einige Typen von ICMP Paketen:

![image-20220411151143350](res/image-20220411151143350.png)

| ICMP-Type | Bedeutung               | Beispiel                                                     |
| --------- | ----------------------- | ------------------------------------------------------------ |
| 3         | Destination Unreachable | Wenn der Router ein Node nicht erreiche kann, weil z.B. die MTU zu klein ist oder der Note ausgesteckt wurde: **TODO Code** Protocol Unreachable=Node kommuniziert nicht über das Protokol;  Port Unreachable = Kein Program hört auf diesen Port; 13 Communication adminstrativvely prohibited = Die Firewall blockiert etwas.<br />Destination Unreachable kann auch genutzt werden, um die MTU einer Leitung zu finden |
| 4         |                         |                                                              |
| 5         |                         |                                                              |
| 11        | Time Exceeded           | Wenn das TTL-Feld =0 ist, wird es vom Router nicht mehr weitergesendet. Dies kann für Trace-Rout genutzt weden. Jeder Router reduziert das TTL-Feld um 1![image-20220411152802784](res/image-20220411152802784.png) |

### Struktur von ICMP-Pakete

![image-20220411151123525](res/image-20220411151123525.png)

Das ICMP Paket wird in einem IP-Paket verschachtelt (`Protocol=1` steht für den IP-Header).

![image-20220411151543114](res/image-20220411151543114.png)

**TODO**
