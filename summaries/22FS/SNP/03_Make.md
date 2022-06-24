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

## Variablen

| Name | Erklärung                      |
| ---- | ------------------------------ |
| `$@` | Dem Target der aktuellen Regel |
| `$^` | Alle Abhängigkeiten            |
| `$<` | Die erste Abhängigkeit         |

## Beispiel

```makefile
TARGET_EXEC := producer
BUILD_DIR := ./build
SRC_DIR := ./

SRCS := producer_consumer.c list.c
OBJS := $(SRCS:%.c=$(BUILD_DIR)/%.o) #producer.c will be turned into producer.o

.DEFAULT_GOAL := $(BUILD_DIR)/$(TARGET_EXEC)


$(BUILD_DIR)/$(TARGET_EXEC): $(OBJS)
	$(CC) $(OBJS) -o $(BUILD_DIR)/$(TARGET_EXEC)

$(BUILD_DIR)/%.o: %.c #builds .o files from .c files
	mkdir -p $(dir $@)
# $< is the first dependency, $@ is the target
	$(CC) $(CFLAGS) -c $< -o $@ 

.PHONY: clean all

clean: 
	rm -r $(BUILD_DIR)

all:
	@make clean
	@make
```

