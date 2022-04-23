# IO

## Serializing

![image-20220421103413866](res/image-20220421103413866.png)

Fields can be marked with transient (`private transient Date someDate;`) if they shouldn't be serialized. This can be usefull for serializing classes which contain unserializable classes (like dates, file descriptor, network sockets or db connections).
