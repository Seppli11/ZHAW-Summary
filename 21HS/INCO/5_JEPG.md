## Was ist ein digitales Bild?

Ein Bild ist ein zweidimensionales Pixel-Array

* schwarzweiss Bild: 2-wertige Pixel

* Graustufenbild: Pixel mit Wertebereich $[0..2^W-1]$, typisch W=8 bit

* natürliches Bild: (Farb-)Pixel mit 3 Komponenten (z.B. RGB). Benachbarte Pixelwerte sind oft fast gleich gross

* Grafik oder syntetisches Bild: haben oft scharfe Kanten

## JPEG Verfahren

1. Das RGB Bild wird zu einem YCrCb Bild umgewandelt

2. Das Bild in 8x8 Blöcke aufteilen

3. Eine Discrete Cosine Transform (DCT) wird auf das Bild angewendet

4. Quanitzation - Es werden gewisse Bildinformationen mehr komprimiert als andere, da sie der Mensch besser wahrnehmen kann

5. DC und AC Seperation

6. Runlength Encoding & Huffman enkodierung

7. In ein File verpacken

Man benutzt bei JPG die Luminance, da das menschliche Auge auf Helligkeit empfindlicher ist

### Schritt 1 - RGB zu YCrCb

* Y - Helligkeitinformationen (eigentlich. ein Graustufenbild)

* Cb - Blau anteil

* Cr - Rotanteil

Im Folgenden Bild sieht man die Beziehung von Cb und Cr:

![](/res/2021-11-01-10-37-21-image.png)

Um die Luminaz von einem Pixel zu berechnen, kann man eine gewichtetes Summe der RGB Pixel errechnen: $L=0.299\cdot R + 0.587 \cdot G + 0.115\cdot B$. Die Faktoren kommen davon, dass das menschliche Auge die Farben Blau, Gelb und Rot verschieden wahrnehmen.

$\begin{bmatrix} Y \\ C_B \\ C_R \end{bmatrix} = \begin{bmatrix}0.299 & 0.587 & 0.114\\ -0.1687 & -0.3313 & 0.5\\ 0.5 & -0.4187 & -0.0813\end{bmatrix} \cdot \begin{bmatrix} R\\G\\B \end{bmatrix} + \begin{bmatrix} 0 \\ 128 \\ 128 \end{bmatrix}$

Umgekehrt kann man folgende Formel benutzen:

$\begin{bmatrix} Y \ C_B \ C_R \end{bmatrix} = \begin{bmatrix}0.299 & 0.587 & 0.114\\ -0.1687 & -0.3313 & 0.5\\ 0.5 & -0.4187 & -0.0813\end{bmatrix} \cdot \begin{bmatrix} R\\G\\B \end{bmatrix} + \begin{bmatrix} 0 \\ 128 \\ 128 \end{bmatrix}$

## Downsampling

Man gibt mit dem folgenden Muster "Blockbreite:Reduktion Breite:Redutktion Höhe"

![](/res/2021-11-01-11-05-11-image.png)

Kompressionsrate: $R=$

## Diskrete Cosinus Transformation

## Quantisierung

Beim Quantisieren wird das Resultat der DCT gewichtet. Dafür nimmt man eine weitere  Tabelle mit Werte. Jeder Wert in der DCT Tabelle wird durch den Wert an derselben Position in der Gewichtungstabelle geteilt. Danach wird auf Ganzzahlen gerundet. Damit wirft man Daten weg, welche weniger relevant sind.

<img title="" src="file:///home/sebi/Documents/zhaw/HS21/res/2021-11-08-10-20-26-image.png" alt="" width="352">

![](/res/2021-11-08-10-22-26-image.png)

## Run-Lenght Encoding

![](/res/2021-11-08-13-59-37-image.png)

Es gibt folgende Tokens:

* (DC Wert) - Ein Token für den DC Wert. Dies ist der Wert oben links

* (Anzahl Nullen, nächstes nicht Null-Zeichen) - Die Anzahl Nullen vor dem nächsten Zeichen

* (EOB) - End Of Block -> der Rest ist Null

Dies wird danach noch mit einem Huffmancode enkodiert. Dafür kann eine fixen Code verwendet werden oder der Encoder kann einen selbst erstellen.

## Dekomprimieren

# MPEG

>  Ansatz: Man speichert nicht jedes Frame einzeln, sondern die Unterschiede

### Makroblöcke

Wenn man ein Video komprimiert, teilt man ein Frame in mehrere Makroblöcke auf. Danach sucht man im letzten Bild nach demselben Block. Da man nicht das ganze Bild absuchen möchte, sucht man nur in einem Suchfenster um den Block herum, da man an nimmt, dass sich das Bild nicht gross verändert. 

Wenn kein Makroblock im letzten Frame im Suchfenster gefunden wurde, wird der Block als JPG komprimiert und gespeichert.

Um Makroblöcke zu finden, werden nicht die eigentlich Pixel verglichen, da kleine Änderungen, welche von z.B. von Sensorrauschen verursacht wurde, dazuführen würde, dass man keine Blöcke finden.

MPEG schreibt nicht vor, wie man nach diesen Blöcke sucht. Meistens schränkt man aber das Fenster zwischen 7-15 Pixel ein.

### Frames

* Intra Frame (I-Frame) - Ein koplettes Frame als JPG

* Predicated Frame (P-Frame) - ein vorheriges Frame wird als Referenz benutzt

* Bidirectional Frame (B-Frame) - ein vorheriges Frame, wie auch das nächste Frame kann als Referenz benutzt werden

![](/res/2021-11-08-11-24-19-image.png)

Da man bei den B-Frames auch voraussehen kann, ist die Reihenfolge der Frames wie man es schaut, nicht dieselbe, wie man es sendet.

![](/res/2021-11-08-11-25-54-image.png)

### Geschichte

* MPEG-1:
  
  * Typisch für Fernseher
  
  * 318 MBit/s -> 1.5 MBit/s

* MPEG-2:
  
  * Für HD-TV 
  
  * Resultierte in ca. 80 - 100 MBit/s
