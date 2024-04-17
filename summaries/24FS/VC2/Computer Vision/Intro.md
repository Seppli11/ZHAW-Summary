# Intro

![image-20240408140630951](./res/Intro/image-20240408140630951.png)

![image-20240408140944040](./res/Intro/image-20240408140944040.png)

There are multiple way to recover the 3D information. A big distinction is made between active, where something is sent out and then measured (e.g. LIDAR, part of FaceID, ...), and passive, where information is only measured. 

Passiv-unidirectional are techniques, where only one image is involved.

The following is an example from *Shape from X*: ![image-20240408141449379](./res/Intro/image-20240408141449379.png)

*Shape from focus* is when the focus of an image changes and from this change, one can recover 3D information.

## Displaying 3D

![image-20240408141824560](./res/Intro/image-20240408141824560.png)

To see images in 3D, we need to show two different pictures to each eye. This can be done with primitive 3D glasses. VR headset work in the same way.

## 3D to 2D

![image-20240408143144574](./res/Intro/image-20240408143144574.png)![image-20240408143228985](./res/Intro/image-20240408143228985.png)

The world coordinate system spans the entire world/scene. The coordinate system is centred on the camera and might be transformed and rotated.

After projecting the world to a surface, the image plane coordinate system describes where something is after the projection. This later gets rasterized, yielding the digitised pixel coordinate system.

See the following to play around with this: http://ksimek.github.io/perspective_camera_toy.html

### Extrinsic Camera Parameters

<img src="./res/Intro/image-20240408144035132.png" alt="image-20240408144035132" style="zoom:50%;" />

The following equation transforms coordinates into the camera coordinate system.
$$
P_C = R(P_W - T)
$$
Where $P_C$ is the position in the camera coordinate system, $R$ is the rotation to align $P_C$ with the axis and $T$ to translate $P_C$ to align with the origin.

In the following, $r$ is the rotation matrix and $tX$ is the translation.
$$
\begin{pmatrix}
	X\\
	Y\\
	Z\\
	1
\end{pmatrix}
\approx
\begin{pmatrix}
	r_{11} & r_{12} & r_{12} & 0 \\
	r_{21} & r_{22} & r_{22} & 0 \\
	r_{31} & r_{32} & r_{32} & 0 \\
	0 & 0 & 0 & 1
\end{pmatrix}

\begin{pmatrix}
	1 & 0 & 0 & -tx \\
	0 & 1 & 0 & -ty \\
	0 & 0 & 1 & -tz \\
	0 & 0 & 0 & 1
\end{pmatrix}

\begin{pmatrix}
	U\\
	V\\
	W\\
	1
\end{pmatrix}
$$

### Intrinsic Camera Parameters

<img src="./res/Intro/image-20240408144330360.png" alt="image-20240408144330360" style="zoom:67%;" />

The dot symbolises the centre of the coordinate system. $f$ is the focal length, or put simple, the distance between the image plane and the camera position. Through the inequality

![image-20240408144737998](./res/Intro/image-20240408144737998.png)

To calculate from the camera coordinate system to the image plane coordinate system.
$$
\begin{pmatrix}
	x\\
	y\\
	1
\end{pmatrix}
\approx

\begin{pmatrix}
	f & 0 & 0 & 0 \\
	0 & f & 0 & 0 \\
	0 & 0 & 1 & 0\\
\end{pmatrix}

\begin{pmatrix}
	X\\
	Y\\
	Z\\
	1
\end{pmatrix}
$$
In order to get a $1$ in the $z$ position of the result, the vector needs to be homginzed. To do this, one needs to divide by $z$, giving us the same formula as above.

### Rasterize 

$$
\begin{pmatrix}
	u\\
	v\\
	1
\end{pmatrix}
\approx

\begin{pmatrix}
	a_{11} & a_{12} & a_{13} \\
	a_{21} & a_{22} & a_{23} \\
	0 & 0 & 1
\end{pmatrix}

\begin{pmatrix}
	x\\
	y\\
	1\\
\end{pmatrix}
$$

![image-20240408150751061](./res/Intro/image-20240408150751061.png)

### Put it together

$$

$$

$$
\begin{align}
\begin{pmatrix}
	u\\
	v\\
	1
\end{pmatrix}
&\approx

\begin{pmatrix}
	a_{11} & a_{12} & a_{13} \\
	a_{21} & a_{22} & a_{23} \\
	0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
	f & 0 & 0 & 0 \\
	0 & f & 0 & 0 \\
	0 & 0 & 1 & 0\\
\end{pmatrix}
\begin{pmatrix}
	r_{11} & r_{12} & r_{12} & 0 \\
	r_{21} & r_{22} & r_{22} & 0 \\
	r_{31} & r_{32} & r_{32} & 0 \\
	0 & 0 & 0 & 1
\end{pmatrix}

\begin{pmatrix}
	1 & 0 & 0 & -tx \\
	0 & 1 & 0 & -ty \\
	0 & 0 & 1 & -tz \\
	0 & 0 & 0 & 1
\end{pmatrix}

\begin{pmatrix}
	U\\
	V\\
	W\\
	1
\end{pmatrix}
\\
&=
\begin{pmatrix}
	\frac f {s_x} & 0 & o_x & 0 \\
	0 & \frac f {s_y} & o_y & 0 \\
	0 & 0 & 1 & 0\\
\end{pmatrix}
\begin{pmatrix}
	r_{11} & r_{12} & r_{12} & -t_x \\
	r_{21} & r_{22} & r_{22} & -t_y \\
	r_{31} & r_{32} & r_{32} & -t_z \\
	0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
	U\\
	V\\
	W\\
	1
\end{pmatrix}
\\
&= K \cdot [R \mid T] \cdot P
\end{align}
$$

![image-20240408151314465](./res/Intro/image-20240408151314465.png)

## Camera Calibration 

### Radiometric

There are artifacts, like vignetting and "hot" pixel (pixel has always current) & dead pixel (pixel doesn't built up current).

<img src="./res/Intro/image-20240415140759803.png" alt="image-20240415140759803" style="zoom:50%;" />

To compensate, record a completely white image and a completely black image. Then average them together.
$$
\frac{I-B}{W}\cdot mean(W)
$$


<img src="./res/Intro/image-20240415141006188.png" alt="image-20240415141006188" style="zoom:50%;" />

*(I is the actual image, B the black image, W the white image)*

### Geometric

The goal is to find the intrinsic and extrinsic parameters (e.g. camera position, brennweite/focal length, ...)

![image-20240415141643043](./res/Intro/image-20240415141643043.png)

The goal is to find points in the checker board in the camera view. This is done for multiple images. As one can seen, this done on a sub-pixel level.

![image-20240415142156689](./res/Intro/image-20240415142156689.png)

Importantly, the focal length is a pixel value and not in milimeter. To get the actual unit, we need data about the sensor.
$$
\begin{align}
sensorSize &= 16mm^2=4.5mm \cdot 3.5mm\\
\frac f {s_x} &= 600px \\
\Rightarrow f&=600px \cdot \frac{w_{sensor}}{w_{pixel}} \\
& = 600 px \cdot \frac{4.5mm}{640px} \approx 4.2mm
\end{align}
$$
First, the equations are simplified, to ensure that all points are on a plane:![image-20240415143139702](./res/Intro/image-20240415143139702.png)

![image-20240415143246400](./res/Intro/image-20240415143307024.png)

![image-20240415143313157](./res/Intro/image-20240415143313157.png)

![image-20240415143321202](./res/Intro/image-20240415143321202.png)

![image-20240415143533395](./res/Intro/image-20240415143533395.png)



![image-20240415143600354](./res/Intro/image-20240415143600354.png)

The above is named direct linear transform (DLT) (https://www.baeldung.com/cs/direct-linear-transform)

In conclusion, we need at least 4 points per plane and 3 different views of a plane.

#### Marker Tracking

Marker tracking can be done in the same way as the calibration with the cheker board. We can get $H$ again, and since we know $K$ from the calibration, we can calculate $K^{-1}\cdot H=[r_1, r_2, t]$. To get $r_3 = r_1 \times r_2$ (since $r_r$ is vertically on the $r_1$ and $r_2$​).

The following shows the typical marker tracking pipeline.

![image-20240415150256178](./res/Intro/image-20240415150256178.png) 

Since the approach with homography jitters a lot, most tracking system use a perspective-$n$-point (PnP) algorithm. This needs four 2d-3d correspaondences. 