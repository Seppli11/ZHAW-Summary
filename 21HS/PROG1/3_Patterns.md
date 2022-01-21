# Patterns

## Strategy Pattern

> Beim Strategy Pattern wird ein Algorithmus in eine Strategy-Klasse extrahiert. Dies erleichtert es, einen Algorithmus mit einem anderen zu wechseln.

Im folgenden Beispiel wird eine Hirachie einer Ente gezeigt. Dabei hat Ente verschiedene Methoden, welche von verschiedenen Entenarten überschrieben werden können. 

Ein Problem, dass bei einer solchen Hirarchie entstehen kann, ist dass es reduntante Implementationen von einzelnen Methoden geben kann. Als Beispiel: Die Stockente und die Reiherente können beide fliegen, während die Gummiente und Dekoente nicht fliegen können. Zwei der Klasse müssen immer `fliegen()` überschreiben.

![PlantUML diagram](res/SoWkIImgAStDuKhEIImkLd3DAqbLgERIBYnDp4xDqz2qKYZBpqpXqYvEpYZFpCr55ahBoKnDHnAevOAQ4LoIdmpKN98AvGUbPcQa5Y49k9VcvcOYyLrIi_F1N2wuLWLTtHexi6ku8DhH1C56e8c1Z44JSaZDIm5w3W00.png)

Als Alternative kann hier das Strategy-Pattern genutzt werden. Nun hat die Ente-Klasse Referenzen zu Strategy-Implementationen, welche entscheiden, ob eine Ente fliegen oder nicht fliegen kann. So kann duplizierter Code verhindert werden

![image-20220120185113772](res/image-20220120185113772.png)