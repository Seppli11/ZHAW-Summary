# File System

## File Attributes

<img src="res/File System/image-20230505083444359.png" alt="image-20230505083444359" style="zoom:67%;" />

## Master Boot Record (MBR)

![image-20230505090827045](res/File System/image-20230505090827045.png)

MBR contains a partition table, where the location and size of all partitions are listed.

## Implementation

### Block Size

The block size dictates how many bytes are in one block.

* Small block size: 
  There are many blocks per file which leads to slow access time. However, there is a small internal fragemention
* Big block size
  There are fewer blocks per file which means faster access time, but more internal fragmentation.

![image-20230505091608808](res/File System/image-20230505091608808.png)

### Block Allocation

Which blocks are allocated to which file can be stored in multiple ways:

It can be stored in a linked list.

<img src="res/File System/image-20230505091923424.png" alt="image-20230505091923424" style="zoom:67%;" />

Another possibility is indexed allocation...

<img src="res/File System/image-20230505091955075.png" alt="image-20230505091955075" style="zoom:60%;" />

### File Names

A big problem with names is that their name is not limited in size. Either the file entry structure has a big empty space for potential names. Another approach is to store a link to a heap space, but this introduces fragmentation to the heap. 

![image-20230505092341943](res/File System/image-20230505092341943.png)

### Blocked Used

To store which blocks are used or not, one can store a list of all unused blocks. An alternative approach is to store a bitmap field for all blocks.

![image-20230505092926575](res/File System/image-20230505092926575.png)

### Consistency

![image-20230505093344937](res/File System/image-20230505093344937.png)

Consistency problems can start to occur if before flushing, the system crashes or stick gets unplugged. There are two tables to identify such inconsistencies: the free block table and the used block table.

With the `fsck` command, one can check the consistency of a device.

### Journaling

The idea of a journal is that the file system write a log of all operations. When the disk is interrupted while writing, the transaction can be reconstruction from the journal. However, this can be a big overhead.

For example when deleting a file, the following operations are written into the journal:

1. Remove the file from its directory
2. Release the i-node to the pool of the of free i-nodes
3. Return all the disk blocks to the pool of free disk blocks

If during deleting a file an error occurred, the file system can rollback to a consistent state and redo the operation.

## Virtual File System (VFS)

Goal: Integration of heterogeneous file systems into a single structure. As long as a concrete system supplies the functions the VFS requires, the VFS does not care what or where the underlying file system is.

![image-20230505130637243](res/File System/image-20230505130637243.png)

## Links

Hardlinks share the same i-node as the target file. This means that even when the target file is moved (in the same partition) the link still works. This comes with the draw back that 

* a hard-link cannot point to a directory
* a hard-link cannot span across multiple partitions

Soft links on the other hand contain a path to another file. Because of this moving the target file won't update the soft link, but it can span across multiple file systems.

## ExtX

![image-20230505132049377](res/File System/image-20230505132049377.png)

Ext2 subdivides a partition in multiple block groups with separate management data. If the first block is corrupted then the other blocks can still be read as the management is local to block groups.

Ext3 added journaling, and ext4 separated the journal into a sep

## Linux

![image-20230505090745879](res/File System/image-20230505090745879.png)

In linux the physical file system is abstracted. This allows things like LLVM.

There are the following file types in Linux:

* Normal files
* Directories
* Character and block device files
  These represent IO device 
* Other types: link files, socket files, named pipe files, ...

### Linux File System Convention

![image-20230505130005640](res/File System/image-20230505130005640.png)