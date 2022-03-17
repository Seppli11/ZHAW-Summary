# Keller Automaten

## Deterministischen Kellerautomaten

>Ein deterministischer Keller Automaten (KA) wird als 7-Tupel dargestellt: $(Q, \Sigma, \Gamma, \delta, q_0, \$, F)$)
>
>* $Q$ ist die endliche Menge von Zuständen
>* $\Sigma$ ist das Alphabet der Eingabe
>* $\Gamma$ ist das Alphabet des Kellers (bzw. des Stacks)
>* $\delta: Q\times (\Sigma \cup \varepsilon) \times \Gamma\rightarrow Q\times\Gamma^*$ ist die (partielle) Übergangsfunktion
>* $q_0$ ist der Startzustand
>* $\$\in \Gamma$ ist ein ausgezeichnetes Symbol vom Alphabet des Stacks/Kellers
>* $F\subseteq Q$ ist die Menge der akzeptierten Zustände 
>
>**TODO: Einschränkungen eines Keller Automaten**
>
>Damit 



![image-20220315145153384](res/image-20220315145153384.png)

## Nichtdeterministischen Kellerautomaten

> Eine NKA ist gleich wie eine KA, nur das die Übergangsfuntkion den Typ $\delta: Q\times (\Sigma \cup \varepsilon) \times \Gamma\rightarrow \mathcal P (Q\times\Gamma^*)$ hat. Der Rückgabetyp ist die Potenzmenge. Somit kann in der NKA ein Eingang mehrere Ausgänge haben.
>
> Wie auch bei einer NEA kann nun im $\varepsilon$ (das leere Wort) für $\Sigma$ in der Übergangsfunktion. 

