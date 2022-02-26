# RegEx

## Syntax vs Semantik

Der Syntax sagt aus, wie die Symbole des Alphabetes zu Wörter angeordnet werden.

Die Semantik sagt aus, was die Symbole bedeuten (z.B. dass die Zahl 101 im Zehnersystem die Zahl 5 ist.)

## Syntax

* $(0|1)$ - entweder 0 oder 1
* $x^*$ - beliebig oft $x$, auch null mal
* $x^+=xx^*$ - mindestens 1-mal $x$
* $\epsilon$ - eine leere Regular-Expression. Diese matcht nichts
* $\oslash$ - eine leere Menge von Regular-Expressions

### Regular-Expression-Sprache

> Die Sprache $RA_\Sigma$ beinhaltet das 

#### Definitionen

* $L(\emptyset)=\emptyset$
* $L(\epsilon)=\{\varepsilon\}$
* $L(a)=\{a\}$, wenn $a\in\Sigma$
* ...