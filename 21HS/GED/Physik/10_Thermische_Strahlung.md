# Termische Strahlung

> **Wichtig:** Alle Temperaturen sind in Kelvin.
> 
> Um von Celsius zu Kelvin zu konvertieren: $T_{kelvin}=T_{celsius}+273.15$

## Elektromagnitische Strahlung

Eine Elektromagnetische Strahlung besteht aus einer Welle mit einer Wellenlänge $\lambda$ und einer Frequenz $\nu$.

Die Formel $c=\lambda\cdot \nu$ zeigt den Zusammenhang zwischen $\lambda$ und $\nu$. $c$ ist dabei die Lichtgeschwindigkeit ($c=3\cdot10^8 m/s$)

Die Energie einer Strahlung kann mit $E=h\nu$ errechnet werden. $h$ ist dabei die Planck'sche Konstante ($h=6.626\cdot10^b{-34}$)



![](/res/2021-12-04-14-19-08-image.png)

Der Absorptionskoeffizent beschreibt, wie viel der Frequenzen ein Körper absorbiert. `1` heisst, dass alles absorbiert wird, `0`, dass nichts absorbiert wird. 

Der Gegenpol, der Reflexionskoeffizent, beschreibt, wie viel der Frequenzen reflektiert werden und kann mit der folgenden Formel umgerechnet werden: $\rho=1-\alpha$

Oft sind diese Koeffizenten abhähngig von der Frequenz (also $\alpha(\nu)$ und $\rho(\nu)$). Ein blaues T-Shirt würde die "blauen Frequenzen" reflektieren und die anderen absorbieren.

![](/res/2021-12-04-16-32-12-image.png)

Bei einem **schwarzen Strahler** kann bewiessen werden, dass es keinen Unterschied gibt, ob die Strahlung vom Material 1 ins Material 2 oder umgekehrt geht.

$$
\alpha_{1\rightarrow 2}=\alpha_{2\rightarrow 1}\\
\sigma_{1\rightarrow 2}=\sigma_{2\rightarrow 1}
$$

### Emission

Wenn eine Strahle von einem "dünnem" Material, wie Luft, aufgenommen wird, wird von Emission von Strahlung gesprochen und anstatt dem Absorptionskoeffizent, wird der Emissionskoeffizenten $\varepsilon$ verwendet (es gilt also: $\alpha_{2\rightarrow1}=\varepsilon_{2\rightarrow 1}$)

### Schwarzerstrahler

Ein Körper mit dem Reflexionskoeffizent $\rho=0$ und Absorptionskoeffizenten von $\alpha=1$ wird `schwarzer Strahler` genannt. Ein schwarzer Block kann als Schwarzerstrahler angenähert werden (er reflektiert trotzdem noch ein wenig Licht), aber auch die **Sonne**, da diese **keine Frequenzen und somit auch Licht reflektiert**.



## Wien'sches Verschiebungsgesetzt

Mit $\lambda_{max}=\frac b T$ kann man die Temperatur **in Kelvin** zu der maximalen Wellenlänge umrechnen.

Mit dieser Formel kann man auch die Lichtfarbe, welche in Kelvin angegeben wird, erklären.

![](/res/2021-12-04-16-04-19-image.png)

## Stefan-Boltzmann Gesetzt (Gesammtleistung)

Um die Gesamtleistung eines Strahlendenkörpers zu berechnen kann man die folgende Formel benützten: $P_{rad}=\sigma AT^4$. 

Dabei ist $\sigma=5.67\cdot10^{-8}$ , $A$ die Oberfläche des Körpers und $T$ die Temperatur des Körpers.

