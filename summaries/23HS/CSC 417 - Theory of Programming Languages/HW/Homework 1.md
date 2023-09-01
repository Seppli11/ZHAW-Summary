# Homework 1

## Dynamic Scope

Shell script is one of the few languages still in use which have dynamic scoping. According to Wikipedia, sh was released in 1979 as a replacement in Unix 7 for the Thompson shell[^1]. 

```bash
#!/bin/sh
x=3
func1 () { 
	echo "in func1: $x"
}
func2 () { 
	local x=9
	func1
}

func2
func1
```

![image-20230831092447394](./res/Homework%201/image-20230831092447394.png)![image-20230831094300779](./res/Homework%201/image-20230831094300779.png)

As one can see, `func1` uses the definition of `x` of the last scope. Since `func2` creates a new `x`, this is the most recent definition of `x` and `func1` proceeds to print `9`. After `func2` exits, the definition of `x` of `func2` is popped from the stack and the remaining and, now, most recent definition is `x=3`. This is confirmed by the second output of `func1` which prints `3`.

As a side node, while she-bang specifies `/bin/sh`, this is usually symlinked to bash. Bash can also run in a posix-compliant mode with the `--posix` switch, which should be equivalent to the standard set for `sh` scripts.

The example above is a slightly altered version taken from https://riptutorial.com/bash/example/8094/dynamic-scoping-in-action.

[^1]: https://en.wikipedia.org/wiki/Bourne_shell  Bourne shell

## Liskov Substitution Principle

