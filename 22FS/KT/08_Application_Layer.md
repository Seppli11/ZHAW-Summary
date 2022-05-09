# Application Layer

## DNS

Jeder Full Qualified Domain Name (FQDN) muss eindeutig sein. Dass heisst, Geschwister-Knoten dürfen nicht den selben Namen haben.

![image-20220509145752223](res/image-20220509145752223.png)

### Record Arten

Es gibt mehrere Typen von Records, welche verschiedene Informationen enthalten.

![image-20220509150918203](res/image-20220509150918203.png)

### Root Servers

Ein Root Server ist ein DNS-Server, welcher weiss wo z.B. der `ch` DNS-Server ist. Er ist auf der obersten Stufe. Weltweit gibt es fast 4000 Root Servers.

### Ablauf eines Namensauflösung

![image-20220509150309291](res/image-20220509150309291.png)

### Reverse DNS

![image-20220509151540327](res/image-20220509151540327.png)

## BOOTP / DHCP

BOOTP läuft auf dem UDP Port 67 für den Server und 68 für den Client.

Zu begin kenn ein BOOTP-Client nur seine eigene Mac-Adresse (nicht aber seine IP-Adresse). Daher sendet er ein Broadcast-Adresse mit seiner Mac-Addresse. Der BootP-Server empfängt dieser und sendet die nötigen Netzwerk-Daten zurück und wo das Image-File liegt, dass der Client dies herunter laden kann.

![image-20220509152126467](res/image-20220509152126467.png)

Wenn dies über Netzwerkgrenzen funktionieren soll, muss der Router wissen, dass Pakete an den Port 67 und 68 weiter geleitet werden soll.

![image-20220509152249481](res/image-20220509152249481.png)

Ein BootP-Server kann ein Broadcast an alle Clients senden, wenn ein Update des Boot-Image gibt und so die Client benachrichtigen. Dies kann auch vom Server kommen ohne das ein Client anfragt.

![image-20220509152427768](res/image-20220509152427768.png)

Folgenden Screenshot ist das Paket Format gezeigt:

![image-20220509152613248](res/image-20220509152613248.png)

(fortsetzung des oberen Screenshots)![image-20220509152704583](res/image-20220509152704583.png)

### Nachteile

* Nachteile:
  * Alles Statisch: Eine gesetzte IP-Adresse ist besetzt, auch wenn das Gerät nicht online ist
  * Manuelle Verwaltung: Alles muss manuell eingetragen werden

## DHCP

DHCP ist rückwärtskompatibel mit BOOTP und benutzt dasselbe Paketformat und dieselben Ports. Damit der DHCP-Server noch weiss, ob ein Client noch gibt, müssen Clients ein DHCP-Response senden, bevor die Lease-Time ablauft. Sonst würde die Adresse wieder freigegeben werden.

Ablauf eines DHCP-Reuqests.

![image-20220509153117412](res/image-20220509153117412.png)

## TFTP

**TODO**