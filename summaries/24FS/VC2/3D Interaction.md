# 3D Interaction

## Interaction within the Graphics Pipeline

![image-20240325144030031](./res/3D%20Interaction/image-20240325144030031.png)

When we want to interact with  something in our world, we have to reverse the graphics pipeline. There are a few ways to map the  interaction in 2D into the 3D space:

* Restrict to one axis of the coordinate system (X, Y, or Z)
* Restrict to orthogonal planes of the coordinate system (XY, XZ, YZ, ...)
  ![image-20240325144252973](./res/3D%20Interaction/image-20240325144252973.png)
* Restrict to a projection plane of the camera
  <img src="./res/3D%20Interaction/image-20240325144308763.png" alt="image-20240325144308763" style="zoom:50%;" />
* Restrict to an axis or plane of the local object coordinate system

## Euler Rotation vs Quaternions

An rotation can be decomposed into an rotation around each axis. These rotations are called Euler angles.
$$
R(\theta)=R_z(\theta_z)\cdot R_y(\theta_y)\cdot R_x(\theta_x)
$$
A problem with euler angles is that a gimble lock, where each rotation axis is aligned, can occurr. It's not clearly defined, how to get out of the lock. 

![image-20240610091712850](./res/3D%20Interaction/image-20240610091712850.png)

## 

![image-20240325144657806](./res/3D%20Interaction/image-20240325144657806.png)

## Camera Navigation

## Object Picking in 3D

![image-20240325150019275](./res/3D%20Interaction/image-20240325150019275.png)

Additionally, to check if a ray hits a triangle, the ray needs to be transformed into the local coordinate system of the triangle. This can become expensive, if a large scene tree is being used.

![image-20240325150309605](./res/3D%20Interaction/image-20240325150309605.png)
