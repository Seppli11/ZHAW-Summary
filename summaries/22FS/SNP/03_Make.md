# Make

## Makefile

Grundsätzlichen Syntax:

```makefile
.PHONE: <targets, welche keine File sind>
target: dependency1 dependency2
	cmd
```

`target` ist ein Befehl und den Output des Befehles. Dieser kann mit `make target` aufgerufen wird.

`dependencies` ist eine Liste von Abhängikeiten. Diese müssen vorhanden sein für das `target`. 

`cmd` wird ausgeführt, um das `target` zu erstellen, nach dem die `dependencies` erstellt und ausgeführt wurden.