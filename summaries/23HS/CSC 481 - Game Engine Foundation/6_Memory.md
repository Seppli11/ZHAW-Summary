# Memory

## Padding

```c
struct Garbage { 
        double a;
        int b;
        short c;
        void *c;
        char e;
        float *f;
        char g;
}
```

This will result in the following padding
```
8 double
4 int  
2 short   
2 paddding
8 pointer
1 char   
7 padding
8 pointer
1 char   
7 padding
```

Thus there is a `2 + 7 + 7 = 16` bit of padding that is wasted.

* Let $n=2^x$ for some non-negative integer $x$, and let $a$ denote a memory address
* If `a % n == 0`, then we are done since $a$ is alligned
* Otherwise, construct  a bitmask, $b$, of $|a|$ bits with the value $n - 1$.
* **TODO**
