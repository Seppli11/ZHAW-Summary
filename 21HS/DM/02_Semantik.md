Semantik = Bedeutung

- Konstante
  - $\top$ = Wahr (\top)
  - $\bot$ = Falsch (\bot)
- Variabeln
- Klammern
- Junktoren

Ableitungsbäume (ein Syntaxbaum / AST) kann genutzt werden, um die Struktur von Termen eindeutig zu zeigen

Beispiel: $f = (((a \wedge b) \vee (\neg c)) \wedge (a \vee b))$

# Belegungen von Variabeln

- für atomare Formeln (z.B. a, b, oder eine andere Variabel)
  - $B: \mathbb V \rightarrow \{1, 0\}$
  - Beispiel: $B(a)=1$
- für komplexe Formeln
  - $\hat B (formel)$
  - Beispiel $\hat B (a \vee b)=false$

# Wahrheitstabelle

In einer Wahrheitstabelle werden alle Teilformeln in Spalten aufgelistet für alle möglichen Inputs.

Teilformeln sind Teile einer grösseren Formeln. 

Beispiel: Teilformeln für $((a \wedge b) \vee (\neg c)) \wedge (a \vee c)$

- die Inputs: a, b ,c
- $a \wedge b$
- $\neg c$
- $(a \wedge b) \vee (\neg c)$
- $a \vee c$
- $((a \wedge b) \vee (\neg c)) \wedge (a \vee c)$

# Semantische Eigenschaften

| Begriff          | Erklärung                                  | Bei Wahrheitstabellen                         |
| ---------------- | ------------------------------------------ | --------------------------------------------- |
| Gültig oder wahr | Bei einer spezifischen Belegung wahr       | (für eine Spezifische Belegung)               |
| Allgemeingülltig | Bei allen Belegungen wahr                  | alle Zeilen sind wahr (Tautologie/$\top$)     |
| Erfülltbar       | mind. eine Belegung wahr                   | mind. eine Zeile mit wahr                     |
| Unerfülltbar     | immer falsch                               | alle Zeilen sind falsch (Wiederspruch/$\bot$) |
| Wiederlegbar     | mind. einmal falsch, nicht unbedingt immer | mind. eine Zeile mit 0                        |

| Begriff          | Lösungsart                                                |
| ---------------- | --------------------------------------------------------- |
| Gültig oder wahr |                                                           |
| Allgemeingültig  | Wahrheitstabelle, Vereinfachung, Beweis durch Widerspruch |
| Erfüllbar        | Ein Beispiel mit Ergebnis "wahr"                          |
| Unerfüllbar      | Wahrheitstabelle, Vereinfachung, Beweis durch Widerspruch |
| Wiederlegbar     | Ein Beispiel mit Ergebnis "falsch"                        |

# Äquivalent ($\equiv$)

- $\equiv$; latex: \equiv
- Dieses Zeichen wird benützt, wenn zwei aussagenlogische Formel unter jeden Bedingung denselben Wert ergeben
- Bei Aussagen kann man auch "$\Leftrightarrow$" bentützen
- Achtung:
  - folgendes ist korrekt: $F \vee (G \vee H) \equiv (F \vee (G \vee H)$, da jede 
  - folgendes nicht: $\hat B(F \vee (G \vee H)) \equiv \hat B((F \vee (G \vee H))$, da man hier eine bestimmte Belegung rechnet und somit einen wirkklichen Wahrheitswert hat. Hier würde man ein = benützen.

# Konsequenz

- F ist genau dann von G, fall F in jeder möglichen Belegung wahr ist, in welcher auch G wahr ist
- Mit logischen Aussagen ausgedrückt: $\forall B (\hat B(F \rightarrow G)=true)$

# Normalformen

## Literale

Literale sind atomare Formeln oder negierte atomare Formel (a oder $\neg a$)

## Negotions Normalform (NNF)

Wenn alle Negationen in Literale und keine Implikationen vorkommen

## Disjunktive Normalform (DNF)

Wenn die folgende Formel eingehaltet wird:
$(L_1 \wedge L_2 \wedge ...)\vee(L_3 \wedge L_4 \wedge ...) \vee ...$

## Konjunktive Normalform (KNF)

Wenn die folgende Formel eingehaltet wird:
$(L_1 \vee L_2 \vee ...)\wedge(L_3 \vee L_4 \vee ...) \wedge ...$

## Umformen - Rechnerisch

Vorgehen:

1. Implikationen eliminieren: $F \rightarrow G \equiv \neg F \vee G$
2. DeMorgan, falls negationen vor Klammern stehen: $\neg(p\vee q) \equiv (\neg p \wedge \neg q)$ bzw. $\neg (p\wedge q) \equiv (\neg p \vee \neg q)$ 
- $\Rightarrow$ NNF erreicht
3. Distributivgesetzt anwenden bis gewollte Form erreicht
- $\Rightarrow$ KNF oder DNF erreicht

## Umformen - mit Wahrheitstabelle

Nach dem man die Wahrheitstabelle gebildet haben kann man folgende Verfahren anwenden:

- Minterm:
  - Bei jeder Belegung, welche 1 als Resultat gibt, eine Formel aufschreiben, welche diese Belegung abbildet (Parameter welche 0 ergeben, negieren, Parameter welche 1 geben, direkt übernehmen, zusammenfügen mit und $\wedge$)
  - Alle Terme mit oder/$\vee$ verknüpfen
- Maxterm
  - Bei jeder Belegung, welche 0 als Resultat gibt, eine Form aufschreiben, welche diese Belegung abbildet (Paramter, welche 0 geben, direkt übernehmen; Parameter, welche 1 geben, negieren; alle Terme mit und/$\vee$ verbinden)
  - Alle Terme mit und/$\wedge$ verknüpfen