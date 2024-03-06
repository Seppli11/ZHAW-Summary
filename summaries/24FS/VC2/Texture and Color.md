# Texture and Color

## Stages of Rendering

![image-20240226140606893](./res/Texture%20and%20Color/image-20240226140606893.png)

**TODO**

![image-20240226140354506](./res/Texture%20and%20Color/image-20240226140354506.png)

## Texture Mapping

```c
glTexCoord2d(s, t);
glVertex3d(x, y, z);
```



![image-20240226141334531](./res/Texture%20and%20Color/image-20240226141334531.png)

When looking up it can happen that aliasing starts occuring. This can be reduced by interpolating.

![image-20240226141458992](./res/Texture%20and%20Color/image-20240226141458992.png)

A second problem starts occurring when mapping a texture to a tilted plane:

![image-20240226141528785](./res/Texture%20and%20Color/image-20240226141528785.png)

![image-20240226141642852](./res/Texture%20and%20Color/image-20240226141642852.png)

### Wrap Mode

```c
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
```



![image-20240226141722797](./res/Texture%20and%20Color/image-20240226141722797.png)

## Light

![image-20240226141850258](./res/Texture%20and%20Color/image-20240226141850258.png)

## Texture Filter

(texel = texture pixel)

![image-20240226142121651](./res/Texture%20and%20Color/image-20240226142121651.png)

When choosing the wrong filter, it can lead to the following effects:

![image-20240226142147270](./res/Texture%20and%20Color/image-20240226142147270.png)

### MIP Maps

MIP maps (multum in parvo / many things in a small place) are multiple textures of the same thing with the different resolution. The different level of details (LOD) are used depending how far the texture is away. This prevents the alaising from having too detailed textures, while also avoiding having muddy textures. 

![image-20240226142226628](./res/Texture%20and%20Color/image-20240226142226628.png)

```c
```

## Textures in Three.js

```js
var texture2 = THREE.ImageUtils.loadTexture("assets/wood.jpg");
texture2.wrapS = texture2.wrapT = THREE.RepeatWrapping;
texture2.repeat.set(6, 4);
var woodMat = new THREE.MeshPhongMaterial( { color: 0xffffff, map: texture2 } );
var box4 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), woodMat);
// mipmap is true by default
texture2.generateMipmaps = true;
```

<img src="./res/Texture%20and%20Color/image-20240226142530861.png" alt="image-20240226142530861" style="zoom:20%;" />

## UV Mapping

![image-20240226142741384](./res/Texture%20and%20Color/image-20240226142741384.png)

## Environment Mapping

### Cube Map

![image-20240226143102850](./res/Texture%20and%20Color/image-20240226143102850.png)

![image-20240226143111420](./res/Texture%20and%20Color/image-20240226143111420.png)

### Sphere Map

![image-20240226143231768](./res/Texture%20and%20Color/image-20240226143231768.png)

![image-20240226143215183](./res/Texture%20and%20Color/image-20240226143215183.png)

## Bump Mapping

A bump map is a texture which modulates the surface normal (the normal vectors which are used for the shader calculation).

<img src="./res/Texture%20and%20Color/image-20240226143314782.png" alt="image-20240226143314782" style="zoom:20%;" />

Instead of using the smooth line $p$, the modified version $p'$ is used. The 

![image-20240226143407915](./res/Texture%20and%20Color/image-20240226143407915.png)

```c
Vertex Color = emission + globalAmbient 
    + sum(attenuation * spotlight * 
          [lightAmbient +  max {L.N, 0} * diffuse) + (max {H.N, 0} ^ shininess)*specular])
```



![image-20240226143522232](./res/Texture%20and%20Color/image-20240226143522232.png)

The following is a bump map:

![image-20240226143632519](./res/Texture%20and%20Color/image-20240226143632519.png)

The z-axis modulation is defined by blue-channel, the y-axis by the green channel and the x-axis by the red channel.

![image-20240226143744236](./res/Texture%20and%20Color/image-20240226143744236.png)

## Shadow Map

A shadow map is being rendered as a second past from the view from each light source.

![image-20240226143931567](./res/Texture%20and%20Color/image-20240226143931567.png)

![image-20240226144140794](./res/Texture%20and%20Color/image-20240226144140794.png)

## Raytracing

### Local illumination model

Light reflected by a surface (and therefore its colour) is dependent only on the surface itself and the direct light sources

![image-20240226145555695](./res/Texture%20and%20Color/image-20240226145555695.png)

**TODO**

### Global illumination model

Light reflected by a surface is dependent on the surface itself, the direct light sources, and light which is reflected by the other surfaces on the environment towards the current surface

**TODO**

### Performance

Raytracing is very inefficent, since every ray can produce secondary rays. There are multiple stop criterias, when the recursive algorithm should be stopped:

* Rays do not hit any objects:
* Maximal tree depth is hit (e.g. two mirrors)
* Ray contribution is neglibable

## Radiosity

**TODO**

## Physical Based Rendering (PBR)

**TODO**

A material has to following properties:

* Albedo
  The color of an object's diffuse light
* Metalness
  How strong light reflects
* Roughness
  