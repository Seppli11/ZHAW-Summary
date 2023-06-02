# Layer 2 - Data Link

## Extensible Authentication Protocol (EAP)

EAP sends the following packates:

![image-20230403103240942](res/Layer 2/image-20230403103240942.png)

There are multiple types defined for the authentication protocol. The following list is not exhaustive.

![image-20230403103314918](res/Layer 2/image-20230403103314918.png)

![image-20230403103340346](res/Layer 2/image-20230403103340346.png)

## IEEE 802.1X

This is a port-based (as in Ethernet jacks) acccess control for LANs. By default the LAN port is not open. If a client connects to it, it first has to authenticate itself. For the authentication part, EAP is used.

However, IEEE 802.1X is not very effective. It protects against an attacker which has physical hardware access. But with the following steps, it can be circumvent:

![image-20230403104059380](res/Layer 2/image-20230403104059380.png)

![image-20230403104314139](res/Layer 2/image-20230403104314139.png)

The actual flow of communication looks the following:

![image-20230403104340341](res/Layer 2/image-20230403104340341.png)

## WLAN

Because there is no cable and everything is sent as broadcast, it becomes trivial to sniff packets. 

### WEP

In WEP every AP and client shares a preconfigured long-term key. Since all clients use the same key, everybody who knows the key can read everything on the network.

An additional problem is that the key is only either 40bits or 104 bits and uses RC4 encryption (which is broken).

![image-20230403105651733](res/Layer 2/image-20230403105651733.png)

The following issues exist:

![image-20230403110046358](res/Layer 2/image-20230403110046358.png)

![image-20230403110241650](res/Layer 2/image-20230403110241650.png)

![image-20230403110435429](res/Layer 2/image-20230403110435429.png)

![image-20230403110609962](res/Layer 2/image-20230403110609962.png)

### WAP

**TODO**

## CBC-MAC Protocol (CCMP)

![image-20230403111450457](res/Layer 2/image-20230403111450457.png)

In the packet, there are headers, a packet number (PN) to prevent replay attacks and the actual payload. $PL(x)$ is based on $PN$ and a block counter $x$ and is unique p