# Optimisations

**TODO: Add picture of all machine independend transformations**

## Source of Inefficiencies

A big source is the programmer itself.

However, the compiler also contributes a fair number of inefficiencies:

* Source-language abstraction (e.g. array  references)
* Context-insensitive processing
* Side effects of optimisation passes

## Function Inlining

One downside of inlining a lot function, is that code size is a lot larger as for every call side the function code is duplicated.

## Instrumentation

If one wants to observe a program, it needs to instrument it. This will add code to the program, which will help to observe the program.

**TODO: Insert instrumentation example**

## Loop Unrolling

```c
for(j = 0; j < n2; j++) {
	for(i = 0; i < n1; i++) {
        y(i) = y(i) + x(j) * m(i, j);
    }
}
```

**TODO: ...**