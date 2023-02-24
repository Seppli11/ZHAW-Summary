# Basics

## CIA Triad

![image-20230220104121279](res/0_Basic/image-20230220104121279.png)

Most measures in IT security have one of these three high-level goal.

The availability category is further subdivided.

![image-20230220104329767](res/0_Basic/image-20230220104329767.png)

The following counter meassures can be used:

![image-20230220104549432](res/0_Basic/image-20230220104549432.png)

## Business Continuity Management

![image-20230220104409214](res/0_Basic/image-20230220104409214.png) 

## Model of Communication

![image-20230220110022152](res/0_Basic/image-20230220110022152.png)

| Name       | Goal                                     | Capabilities                                |
| ---------- | ---------------------------------------- | ------------------------------------------- |
| Alice, Bob | Communiacte securerly                    | send, receive messages, perform computation |
| Eve        | Read messages (eavesdrop)                | intercept messages                          |
| Mallory    | Manipulates messages (man-in-the-middle) | intercept, delete, modify, replay messages  |
| Trent      | Help Alice and Bob (trusted thirt-party) | send, receive messages, perform computation |

## Goals of Cryptography

## Math Terms

![image-20230220110859299](res/0_Basic/image-20230220110859299.png)

## Kerckhoff's Principal

Kerckhoff's principal says, that the security of a cipher must only relay on the key being a secret, **NOT** the cipher itself. Security-by-obscurity does not work!

## Properties of good encryption methods

![image-20230220112015855](res/0_Basic/image-20230220112015855.png)

## Cryptocraphic Work Factor

This factor describes how many keys one has to try on average before they guess the right one. This depends on the distribution of the keys and assumes that the right key can be detected. If every key is equally likely then the work factor is maximised. Additionally, when choosing a key it is vital to choose randomly so every key is equally likely.

## Perfect Secrecy/Information-Theoretically Secure

