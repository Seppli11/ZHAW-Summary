---
title: "KT Summary"
tags:
- summary
- KT
---
# Summary

![image-20220221213400813](res/image-20220221213400813.png)

![image-20220411144839594](res/image-20220411144839594.png)

## Physical Layer (Bitübertragungsschicht) (Layer 1)

Das physikalische Medium, was die Geräte verbindet. Dies kann ausgetauscht werden und die anderen Schichten bleiben umbetroffen.

<img src="res/image-20220228150817493.png" alt="image-20220228150817493" style="zoom:50%;" />

### Physik - Ausbreitungsgeswindigkeit

Die Lichtgeschwindigkeit im Glas mit dem Brechungsindex $n=1.5$ ist: $c_{Glass}=\frac{c_0}{n}=\frac{299'792'458}{1.5}\approx200'000\frac{km} s$ In einem elektrischen Leiter ist es ebenfalls $200'000\frac{km}s$

### Signaldämpfung

<img src="res/image-20220228151259556.png" alt="image-20220228151259556" style="zoom: 40%;" />

Die Dämpfung ist $Signaldämpfung [dB] = 10\cdot \log\left(\frac {P1}{P2}\right)=20\cdot \log\left(\frac {U1}{U2}\right)$, Dabei ist $P$ die Leistung und $U$ die Anzahl Spannung (Volt).

Die Dämpfung von 6dB heisst eine Leistungsabnahme von 4 und eine Spannungsabnahme von 2

Der **Dämpfungsbelag** ist wieviel Dämpfung über 100m oder 1km statfindet (Masseinheit: `db/100m` oder `db/km`)

### Kabel-Arten

#### Koaxialkabel

Bestehen aus einem Leiter und sind geeignet für hochfrequente Signale, haben einen kleinen Dämpfungsbelag und sind unempfindlich gegenüber von elektromagnetischen Störungen. Die Kabel selbst sind dafür relative empfindlich.

#### Paarsymetrische Kabel (Twisted Pair)

Das Namensschema von Twisted Pairs ist wie folgt: $xx/y\text{TP}$.

| Werte für $xx$ | Werte für $y$           | Erklärung                     |
| -------------- | ----------------------- | ----------------------------- |
| U              | U                       | ungeschirmt                   |
| F              | F                       | Folienschirm                  |
| S              | S                       | Geflechtschirm                |
| SF             | *&lt;gibt es nicht&gt;* | Schirm aus Geflecht und Folie |

*Schirme funktionieren nur, wenn sie gut geerdet sind!*

* Störsignale werden minimiert, in dem auf zwei Kabeln das invertierte gesendet wird. 
* Für Elektromagnetische Ströungen, sind die Kabel verdrillt. So heben sich die Störungen auf
* Zudem werden noch die Leitung geschirmt. Diese Schirme müssen geerdet sein und galvanisch getrennt sein

##### CAT-Kabel

| Bezeichung | Frequenzberreich | Erklörung                                                    |
| ---------- | ---------------- | ------------------------------------------------------------ |
| CAT-1-4    | 0.4/4/16/20 MHz  | Für Telefone und Modemleitungen oder langsames LAN           |
| CAT-5      | 100 MHz          | Weitverbreitet. Erlaubt eine max. Bitrate von 1000Mbit/s bis zu 100m |
| CAT-6      | 250 MHz          | Wird meistens für Gigabit (1000 Mbit/s) benützt              |
| CAT-7      | 600 MHz          | Geeigent für 10 Gigabit.  Es werden aber S/FTP Kabel benötigt |
| CAT-8      | 2000 MHz         | Datenraten bis 40 Gigabit bis zu 30m                         |

### Glassfasser

Vorteile von Glassfasser: 

* Vollstänstig unempfindlich gegenüber elektromagnetischen Störungen
* Kleine Signaldämpfung und grosse Distanzen
* Grosse Bandbreite und somit grosse Übertragunsraten

**TODO**



Arten der Verbindung:

* Simplex: Nur ein Kanal (TV, Radio)
* Halbduplex: Nur ein Kanal, welcher abwechslungsweise in beide Richtung nutzbar ist (Funkgerät)
* Vollduplex: Ein Kanal in beide Richtungen

### Serial vs Parallel

Bei der **paralleln** Übertragung werden mehrere Signale aufsmal übertragen. Bei hohen Takten müssen alle Leitungen genau Lange sein und daher kommt es nur auf kurze Distanzen zum einsatz.

Bei serieln Verbindungen wird zuerst das LSB (= Least Significant Bit) übertragen und zuletzt das MSB (=Most Significant Bit)

Bei der **synchronen serieln** Übertragung wird ein Clock-Signal übertragen. Es werden daher keine Start- und Stop-Bits benötigt

Bei der **asynchroner serieln** Übertragung wird kein Clock-Signal übertragen. Anstatt gibt es ein Start und Stop bit. Wenn der Empfänger das Start-Bit erhält. stellt er seine eigene Clock auf diese Zeit ein. Der Takt darf nicht mehr als die halbe Bitzeit T abweichen.

![image-20220226131651126](res/image-20220226131651126.png)

### Gleichspannungsfreei

Der Sende rund Empfänger sind galvanisch getrennt. Dies schützt die Geräte, falls beim anderen ein Blitz einschlägt. Da hierbei oft mit Capacitors umgesetzt wird, sollte das Signal nicht immer bei `1` oder `0` sein, sonder möglicht oft wechseln.

### Taktrückgewinnung

Bei der **AMI-Codierung** wird ein `0` als `0V` encodiert und `1` abwechslungsweise als `U+` und `U-`

Bei der **HDB3** Codierung wird zusätzlich nach `000` eine `1` mit demselben Pegel wie die letzte `1` gesendet (`0001` ist grün in der Grafik) . Wenn die Anzahl `1` seit der letzten Regelverletztung gerade ist, wird anstelle `1001`  (rot in der Grafik) versendet 

![image-20220228213731609](res/image-20220228213731609.png)

### Bandbreite

| Begriff                         | Erklärung                                                    |
| ------------------------------- | ------------------------------------------------------------ |
| Baud-Rate                       | Anzahl Symbole pro Sekunde. Ein Symbol ist ein Zustand im Datenstrom |
| Bitrate (Nyquist)               | $f_s \le 2B$ Dabei ist$f_S$ die Baud-Rate und $B$ die Bandbreite des Kanals in Hz |
| Zustände                        | $M=1+\frac A {\Delta V}$  wobei gilt: $A$ ist die max. Amplitude $\Delta V$ die Ungenauigkeit des Empfängers |
| Max Bitrate (Hartley's Gesetzt) | $R [bit/s] \le 2B [Hz] \cdot \log_2(M)$, wobei $R$ die max. Bitrate ist |
| Informationsgehalt (Bit)        | $\log_2(M)$ Der Informationsgehalt eines Symboles            |
| Kanalkapazität ($C$)            | $C=B\cdot \log_2\left(1+\frac S N\right)$, wobei $B$ die Kanal-Bandbreite in Hz ist, $S$ die Signalleistung und $N$ die Rauschleistung |
| Nettobitrate                    | $Nettobitrate=Brutobitrate\cdot\frac{Nutzdaten}{Nutzdaten + Header}$ |
| Hamming-Distanz                 | **TODO**                                                     |

Beispiel: Mit AMI können 3 Werte pro Symbol übertragen werden. Informationsgehalt: $I_S=\log_2(3)=1.58 \left[\frac{Bit}{Symbol}\right]$ , da aber nur ein Bit pro Symbol übertragen wird, liegt die Effizienz bei $\frac 1 {1.58}=63\%$

## Data Link Layer (Layer 2)

Aufgaben:

* Sichere Verbindung zwischen zwei Teilnehmer (Fehlerkorrektur und erkennung)
* Verpacking der Daten in Frames (Framing)
* Frame Erkennung
* Flow-Controll (Fluss Steuerung)
* Adresseriung der Teilnehmer (wenn mehrere Teilnehmer im Netz sind)
* Medium Zugriff (wenn meherere Teilnhemer das Medium teilen)

### Framing

* **asynchroner Übertragung**
  Es wird ein Frame (Anzahl Elemente; Datenblock mit $n$ Elementen; Fehlererkennung) gesendet und danach ist Ruhe, bis zum nächsten Frame
* **synchroner Übertragung**
  Es wird kontinuierlich Frames gesendet, falls nötig auch leere. Es gibt ein Start- und End Flag (meist `01111110`). Es wird **bit-stuffing** verwendet, um zu verhindern, dass das Flag im Daten-Block vorkommt. Wenn 5x`1` gesendet wurde, wird eine `0` gesendet, welche vom Empfänger ignoriert wird

#### Länge eines Frames

$Nettobitrate=Brutobitrate\cdot\frac{Nutzdaten}{Nutzdaten + Header}$

Je länger ein Frame ist, desto höher ist die Nettobitrate. 
Nachteile: **Durchsatz** (Wahrscheinlichkeit, dass ein Fehler während eines Frames auftritt); **Effizienz** (Wenn ein Fehler auftritt, ist das es verloren); **Zuverlässigkeit** (Wahrscheinlichkeit, dass ein undetektierbarer Fehler auftritt steigt); **Jitter** (Variation der Zeitabstände zwischen Frames)

<img src="res/image-20220314151752346.png" alt="image-20220314151752346" style="zoom: 50%;" />

Durchsatz hängt von der Nettobitrate und der Frame-Fehlerwarscheinlichkeit ab
$$
\text{Frame-Erfolgswahrscheinlichkeit: } (1-p_e)^N\\
\text{Frame-Fehlerwahrscheinlichkeit: } 1-(1-p_e)^N\\
\text{Optimale Frame-Länge: } \sqrt{\frac{H}{p_e}}\\
$$
Dabei ist $N$ die Länge des Frames, $H$ die Länge des Headers und $p_e$ die Bitfehlerwahrscienlichkeit.

## Fehlererkennung

* Backward Error Correction: Fehler kann erkennt werden und die Daten neuangefordert werden
* Forward Error Correction: Die Fehler können erkennt und zu einem gewissen Punkt korrigiert werden

**Blockcodes**:

* Systematischer Block-Code: Informationsbits und Fehlerschutsbits sind klar getrennt (N=Anzahl CodeBits, K= InformationsBits)
* Linearer Block-Code: Jedes mit Jedem geXored Codewort gibt ein Codewort (jeder Code mit einer Generatormatrix ist linear)
* Zyklischer Block-Code: Rotierbar (`110` $\rightarrow$ `011`$\rightarrow$ `101` $\rightarrow$ `110`)
* Perfekter Block-Code: gleiche Hammingdistanz zwischen allen Codewörtern
* Das Hamming-Gewicht=die kleinste Anzahl `1` auf einer Linie der Generator-Matrix
  Das Hamming-Gewicht ist gleich die Hamming Distanz $d_{min}$
* Erkennbare Fehler: $d_{min}-1$ und korrigierbare Fehler: $\frac{d_{min}-1}2$

## Fehlerkorrigierende Codes

$\frac {d_{min}-1}2$ korrigierbar
<img src="res/image-20220111173947962.png" alt="image-20220111173947962" style="zoom:30%; float: right" /><img src="../../21HS/INCO/summaries/res/image-20220111174032911.png" alt="image-20220111174032911" style="zoom: 33%;" />

Generatormatrix Bedinungen:

1. für $d_{min}=3$ muss jeder Code (ausser dem 0-Code) min. 3x`1` haben
2. Mindestens eine `1` muss in der Einheitsmatrix sein
3. Jede Pariätsmatrix-Zeile muss 2x`1` beinhalten

### CRC

Das Datenpolynom wird um die Anzahl Stellen des Generatorpolynoms verschoben und anschliessend durch das Generatorpolynom geteilt. Das Resultat wird zum Datenpolynom hinzu addiert. Dabei werden die entstandenen `0` des Datenpolynoms gefüllt. 

Der Empfänger kann den empfangenen Wert durch das Generatorpolynom teilen und muss `0` erhalten.Flusssteuerung

## LAN

| Art       | Erklärung                                                    |
| --------- | ------------------------------------------------------------ |
| Unicast   | Ein Paket hat wird genau an ein Ziel gesendet. Das Paket wird mit einer Adresse ausgestattet, so dass es am Ziel sicher ankommt. (Netflix) |
| Broadcast | Das Paket wird an alle Knoten im Netzwerk gesendet. Das Paket wird mit einer Broadcast-Adresse ausgestattet (Live-Stream/Twitch) |
| Multicast | Das Paket wird an eine Gruppen von Knoten gesendet. (Radio)  |
| (Anycast) | Mehrere Server mit den selben Adressen. Der Knoten davor entscheidet, an welchen Knoten übertragen wird |

### Topologien

| Topologie       | Beschreibung                                                 |
| --------------- | ------------------------------------------------------------ |
| Bustopologie    | Alle Knoten sind an einer Leitung angeschlossen              |
| Linientopologie | Ein Knoten ist mit dem Nächsten verbunden.                   |
| Ringtopologie   | Eine Linientopologie, mit zusammen gefügte Enden             |
| Sterntopologie  | Alle Knoten hängen an einem Hub/Switch                       |
| Baumtopologie   | Entsteht, wenn die Sterntopologie hirarchisch kombiniert wird |



### IEEE Namensgebung

![image-20220314110750571](res/image-20220314110750571.png)

* 1000BASE-T = Ethernet mit Basisband-Kanalcodierung mit einer Bitrate von 1Gbit/s mit Twisted-Pairs
* 10BASE5 = 10Mbit/s Basisband-Ethernet mit max 500m Segmentenlänge

### Shared-Ethernet

<img src="res/image-20220604133519114.png" alt="image-20220604133519114" style="zoom:50%;" />

Bevor ein Knoten sendet, wartet er, bis die Leitung frei ist. Während dem Senden wird der Pegel auf der Leitung kontroliert, um kollisisionen fest zu stellen.

Wenn eine Kollision festgestellt wurde, wird ein Jamming Signal gesendet und ein zufälliges Vielfache von der Slot-Zeit $t_s$. Bei der 1. Kollision wird `0x` oder `1x` gewartet, bei jedem nächsten wird der Zeitbereich verdoppelt. Bis zu 16 Versuche, danach wird die Übertragung abgebrochen. Der andere Sender erkennt nur, dass ein Signal eine Kollision verursacht hat, wenn er während des Sendens ein Jamming Signal erhaltet.

<img src="res/image-20220604135311557.png" alt="image-20220604135311557" style="zoom:50%;" />

### Collision Domain

**Collision Domain**
Die Collision Domain ist der Bereich des Netzwerks, in welchem ein Fehler erkennt wird. Da der ursprüngliche Sender nur die Kollision erkennt, wenn er das Jamming Signal während des Sendens empfängt, muss die Collision-Domain kleiner als die Halbe-Ausbreitungsdistanz des kürzesten Paket (46Bytes Daten)![image-20220604160112682](res/image-20220604160112682.png)
$$
t_{frame} > 2\cdot t_{transfer}\\
t_{frame} = \frac{Framesize_{min}}{Bitrate} \\
t_{transfer}=\frac{d_{max}}{C_{Medium}}\\
d_{max}<\frac 1 2 \frac{Framesize_{min}}{Bitrate}\cdot C_{Medium}
$$

Dabei ist $d_{max}$ die Maximale Distanz der Collision Domain

Wenn ein Repeater/Hub im Spiel ist, muss die Formel $t_{frame} > 2\left(\sum t_{transfer} + \sum t_{forwarding}\right)$ benutzen

<img src="res/image-20220604163000238.png" alt="image-20220604163000238" style="zoom:50%;" />

Die **Broadcast-Domain** ist der Bereich im Netzwerk, in welcher ein Broadcast-Frame ankommt.

### Hub vs Switch

Ein Hub ist ein "dummes" Gerät, welcher alle Informationen an alle Ports senden. Ein Switch liest die Layer 2 Headers and sendet das Paket nur an die nötigen Ports. Dadurch wird die Collision Domain unterbrochen. Dies wird auch Transparent Bridging genannt, da die Sender und Empfänger nichts davon wissen.

Ein Switch merkt sich die Mac-Adressen der Sender und speichert diese mit dem Port in der Filtering Database ab. Dank dieser Datenbank, muss der Switch ein Paket nur an einen Port senden (ausser Broadcast-Frames). Nach einer gewissen Zeit wird ein Eintrag wieder gelöscht. (**Address Learning**)

### VLAN

Bei VLAN wird ein VLAN-Tag zwischen `Source-Adress` und `Length/Type` eingefügt. Mit diesem Tag kann ein Switch ein Paket einem bestimmten Virtuellen LAN zuordnen. Diese Zuordnung wird in einer Tabelle geregelt. Ein Virtuelles Lan bildet eine Broadcast Domain.

Dieser Tag besteht aus:

* **Tag Protocol Identifier**:
* **User Priority/Priority Code Point**: (3 Bit) Eine Priorität, um z.B. gewisse Applikationen zu priorisieren
* **Cannonical Format Identifier**
* **VLAN-Identifier**: (12-Bit)

### (Rapid) Spanning Tree Protocol

Beim Rapid Spanning Tree Protocol werden einige Pfade deaktiviert, um Loops zu "entfernen".

Es muss ein Root-Switch im Baum gefunden werden. Der Root ist der Switch mit der tiefsten Bridge Identifier. Falls zwei die gleiche Haben, entscheided die Mac-Adresse. 

Zu begin preist jeder Switch sich selbst als Root-Switch an. Übernimmt aber ein anderen Root-Switch, sobald er eine Nachricht erhaltet, in welchem ein "besseren" Root-Switch erwähnt wird. In diesen Bridge Protocol Data Unit (BPDU) Nachrichten teilt jeder Switch seinen Nachbarn mit, welches nach seiner Wissen, der nächste Root-Switch ist und wie viel der Weg dorthin kostet. Der **Root-Port** eines Switches ist der Port, über welcher der Root-Switch über den kürzesten Weg erreichbar ist. 

Alle Bridges senden BPDU-Nachrichten all 2 Sekunden. Falls diese Ausbleiben, wird das Netzwerk neu konfiguriert.

### Autonegotiation

Bei Autonegotiation tauschen Netzwerkkomponente aus, welche Features sie haben.

![image-20220604174254997](res/image-20220604174254997.png)

### Manchester-Codierung (10Mbit/s)

In Ethernet wird die Manchester-Codierung zwischen 0V und -2V angewendet.

* Eine steigene Flanke ist eine `1`
* eine sinkende Flanke ist eine `0` 

![image-20220314144944190](res/image-20220314144944190.png)

### Mac-Adresse

`04-0A-E0-13-14-26`

Im ersten Byte (oben `04`) `0000 00xy`, ist $x$, ob es eine Group Adress (`1`) oder individual Address (`0`) ist und $y$, ob es eine Locally administered Address (`1`) oder Universally adinistered address (`0`) ist.

Die ersten 3 Bytes ist die ID der Hersteller, die letzten 3 Bytes eine Laufnummer (`aa-aa-aa-bb-bb-bb`, a ist die ID des Herstellers, b die Laufnummer)

### Ethernet Frame



* <img src="res/image-20220321150851834.png" alt="image-20220321150851834" style="zoom:50%; float: right" />**Preamble** und **Start Frame Delimiter (SFD)**

  Die Preamble werden 7 Bytes, welche aus Abwechslungsweise `0` und `1` bestehen. Das 8 Byte (das SFD) hat die Form `10101011`

* **Length/Type**
  Wenn der Wert $\le 1500$ ist, stellt es die Anzahl von Bytes im `Data` Feld dar (ohne `PAD`). Sonst wird angegeben, was für ein höheres Protokoll im Datenfeld enthalten ist.

* **Data/PAD**
  Die Daten (zwischen 0 - 1500 Bytes). Falls die Daten kleiner als 46 Bytes sind, wird dies mit PAD aufgefüllt

* **Frame Check Sequence**
  CRC32 Checksume

* **Interframe Gap**
  minimaler zeitlichen Abstand zwischen zwei Frames

## Network Layer (Layer 3)

| Klassen | Adressbereich               | Anzahl Netze | Interfaces pro netz |
| ------- | --------------------------- | ------------ | ------------------- |
| A       | 1.0.0.0 - 127.255.255.255   | 127          | 16'777'214          |
| B       | 128.0.0.0 - 191.255.255.255 | 16'384       | 65'534              |
| C       | 192.0.0.0-223.255.255.255   | 2'097'152    | 254                 |

Die folgenden privaten Netzwerke gibt es:

| Klasse | Netzadresse                 | Subnetmaske   |
| ------ | --------------------------- | ------------- |
| A      | 10.0.0.0                    | 255.0.0.0     |
| B      | 172.16.0.0 - 172.31.0.0     | 255.255.0.0   |
| C      | 192.168.0.0 - 192.168.255.0 | 255.255.255.0 |

### 
