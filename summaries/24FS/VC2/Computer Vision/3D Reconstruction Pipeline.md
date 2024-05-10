# 3D Reconstruction Pipeline (Structure from Motion)

![image-20240506140841559](./res/3D%20Reconstruction%20Pipeline/image-20240506140841559.png)

The following is the basic workflow to recover 3D data:

![image-20240506141013696](./res/3D%20Reconstruction%20Pipeline/image-20240506141013696.png)

**The algorithm below assumes that the structure is static.**

## Structure from Motion (SfM) vs Simultaneous Localisation And Mapping (SLAM)

![image-20240506150104341](./res/3D%20Reconstruction%20Pipeline/image-20240506150104341.png)

## Get Point Correspondences

When talking about still images, one usually talks about structure from motion. On the other hand, when taking about finding correspondences in a video, this is called SLAM. However, both use the same basic algorithm.

## Finding Camera Position

To get the camera position, the foundation matrix $F$ needs to be recovered. See Intro/Stereo to see the details.

![image-20240506141907988](./res/3D%20Reconstruction%20Pipeline/image-20240506141907988.png)

The steps are $F \to E \to R,T$ to get the rotation matrix $R$ and the translation matrix $T$ of the camera.

## Scene Structure: Triangulation

**TODO**

In praxis, usually there will not be a point that satifies both contraints, since there is noise. This is solved by using a direct linear transform, which performs a least square problem.

## Sequential Structure from Motion

![image-20240506142550474](./res/3D%20Reconstruction%20Pipeline/image-20240506142550474.png)

## NeRF