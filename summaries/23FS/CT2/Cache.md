# Cache

![image-20230419110030095](res/Cache/image-20230419110030095.png)

The L1-cache can be split into data and instruction cache which would represent a Harvard architecture.

![image-20230419110455427](res/Cache/image-20230419110455427.png)

## Principle of Locality

* Spacial Locality
  If one byte is read, it is probable that the next few bytes will read as well
* Temporal Locality
  If one byte is read, it will probably be read again

```c
for(int i = 0; i < 10000; i++) {
    a[i] = b[i]; // spatial locality
}

if(a[1234] == a[4321]) { // temporal locality
    a[1234] = 0;
}
```

## Cache Mechanism

The cache works with blocks of data. This satisfies both spacial and temporal locality.

If the CPU requests a block, which currently is not in the cache, then this is a cache miss. A cache miss is expensive since the CPU has to wait for a slower cache or RAM. If a requested block is cached, then this is a cache hit.

One way to improve performance is to optimise for higher hit rates.

## Cache Organisation

The `tag` specifies which block in memory is cached, `v` is a bit which indicates the cache line is valid, and in the `data` bytes the actual cached data is stored. 

From a memory block id, its corresponding memory address can be calculated. 

<img src="res/Cache/image-20230419111715630.png" alt="image-20230419111715630" style="zoom:80%;" />

In the following example, such a table is used. Each block is the size of 4 bytes.

![image-20230419111946074](res/Cache/image-20230419111946074.png)