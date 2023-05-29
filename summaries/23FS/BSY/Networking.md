# Networking

<img src="res/Networking/image-20230526083608492.png" alt="image-20230526083608492" style="zoom:50%;" />

## OSI-Layers

### Layer 1 - Physical Layer

### Layer 2 - Data-Link Layer

The following is how a naive network stack would implement the layering.

<img src="res/Networking/image-20230526085216011.png" alt="image-20230526085216011" style="zoom:50%;" />

A much smarter approach is to give the upper layer just a memory pointer to content instead of copying the entire frames. This is also called a zero-copy stack.

<img src="res/Networking/image-20230526085317396.png" alt="image-20230526085317396" style="zoom:80%;" />

Linux defines the struct `sk_buff` to store the network frames. To do the actual sharing DMA is used.

![image-20230526085822727](res/Networking/image-20230526085822727.png)

The following diagram shows how the data travels from the NIC to the application.

![image-20230526085959085](res/Networking/image-20230526085959085.png)

The following is how Linux actually implements the ip stack. The payload isn't copied. However, the headers are copied, since layers sometimes modify the headers  (e.g. TTL in IP).

![image-20230526090456315](res/Networking/image-20230526090456315.png)

Things like ARP, and briding is implemented in the kernel.

![image-20230526090740590](res/Networking/image-20230526090740590.png)

### Layer 3 - Networking Layer

<img src="res/Networking/image-20230526092343386.png" alt="image-20230526092343386" style="zoom:67%;" />

The diagram above shows how an IP packet flows through netfilter...

### Layer 4 - Transport Layer

* Flow-Control: That the receiver doesn't get overwhelmed (e.g. when the receiver is a raspberry pi)
* Congestion-Control: That the network itself doesn't get overwhelmed (e.g. when a router is a raspberry pi)

Netfilters a

What is trafic engineering?

### Layer 7 - Application Layer

![image-20230526093624072](res/Networking/image-20230526093624072.png)



## Layer 2 Briding

![image-20230526090907820](res/Networking/image-20230526090907820.png)

## Netfilter

![](res/Networking/image-20230526091207154.png)

Netfilter structures how a frame traverses layer 2 and lever 3.