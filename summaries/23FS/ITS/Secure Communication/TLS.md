# TLS (Transport Layer Security)

<img src="res/TLS/image-20230424102238314.png" alt="image-20230424102238314" style="zoom:67%;" />

TLS works on top of TCP and can be implemented in user mode. Each application can use their own implementation independent of the OS. Additionally, TLS doesn't has to worry about lost and re-transmitted data, since this is already handled by the TCP.

TLS provides authenticated, integrity-protected and confidential data exchange in addition to disallowing replaying and deleting of messages.

There are numerous usage of TLS in different protocols: HTTPS, POS3S, SMTPS, FTPS (not SFTP which is over SSH), IMAPS, ...

TLS operates in three phases:

1. Handshake
   Both party authenticate and exchange cryptographic algorithms and key material
2. Data Exchange
3. Connection Tear Down

## TLS Record

<img src="res/TLS/image-20230424102412368.png" alt="image-20230424102412368" style="zoom:67%;" />

Each of those protocols send a TLS message in the following format:

![image-20230424102542942](res/TLS/image-20230424102542942.png)

The payload can be a handshake package, an alert package or a change cipher spec. 

## TLS Handshake

When the server and client first communicate, neither have a previous association or shared secret. Only the root certificate is known to the client.

To bootstrap the connection, **TODO**

## TLS Session Resumption

**TODO**

## Application Data

![image-20230424105358173](res/TLS/image-20230424105358173.png)

The tag functions as a signature which ensures that nobody tampered with the data (by e.g. removing some bytes blindly). Both the server and client count each fragment and the counter is an input for the calculation of the tag. This mitigates replay attacks.

The fragmentation on TLS level is needed as the client needs the tag to ensure the body is actually valid. This ensures that the client gets the data in a timely fashioned.

## TLS Tear Down

**TODO**

## Security Analysis

## DTLS

With DTLS one can use TLS over UDP. Using "normal" TLS over UDP doesn't work as TLS assumes that if packets are duplicated, reordered or don't make it, then this is an attack.

DTLS re-implements TCP's reliability for the handshake (things like re-transmissions and reordering).

For the actual data frames, sequence numbers are in the message itself.

