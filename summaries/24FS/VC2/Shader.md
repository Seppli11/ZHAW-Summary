# Shader

In modern OpenGL (OpenGL 3) the shader is split in vertex shader and fragment shader. The vertex shader operates on the 3D structure, where as the fragment shader is after rasterising and thus operates on a 2D image.

![image-20240311141015174](./res/Shader/image-20240311141015174.png)

*(In old OpenGL there used to be a Texture and Lighting stage, instead of the vertex and fragment shader)*

## Basic Shader

![image-20240311142811232](./res/Shader/image-20240311142811232.png)

To actually render the sphere in the image above, the following vertex shader is necessary:

```glsl
// Configuration
#version 300 es
#extension all : warn
    
precision highp float;
// Shader parameters
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

// Streaming input
in vec4 position;
void main(void) {
    // Transform vertex position to screen space
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```

Additionally is the following fragement shader necessary:

```glsl
// Configuration
#version 300 es
#extension all : warn
precision highp float;
// Static colour passed by user
uniform vec4 colour;
void main(void) {
	gl_FragColor = vec4(colour.r, colour.g, colour.b, 1.0);
}
```

## Basic Math

There are multiple coordinate spaces:

| Space            | Explanation                  | Matrix                                                       |
| ---------------- | ---------------------------- | ------------------------------------------------------------ |
| Object Space     | Relative to the object       | `normalMatrix` (3x3 matrix) for normal vectors, `modelMatrix` (4x4 matrix) for position matrix to world space |
| World Space      | Relative to the world        |                                                              |
| View Space       | Relative to the camera       | `modelViewMatrix` to convert position from object space to view space |
| Projection Space | The screen coordinate system | `projectionMatrix` to convert from the view space to the screen coordinates |

In Three.js the following values are defined

| What              | Type    | Explanation                                                |
| ----------------- | ------- | ---------------------------------------------------------- |
| `normalMatrix`    | `mat3`  | Converts normal vectors from object space to world space   |
| `modelMatrix`     | `mat4`  | Converts position vectors from object space to world space |
| `modelViewMatrix` | `mat4`  | Converts position vectors from object space to view space. |
| `normal`          | `vec3`  | The normal vector                                          |
| `position`        | `vec3`  | the current position                                       |
| `uv`              | `vec2`? | The current texture coordinate of the current vertex       |



## Shaderes in Three.js

A shader can be defined in the following way:

```js
let mat = new THREE.ShaderMaterial({
    // uniforms/variables 
    uniforms: {
        color: { value: new THREE.Vector4( 0.8, 0.2, 0.8, 1.0 ) }
    },
    
    // the actual source code of the vertex and fragement shader
    vertexShader: document.getElementById('passthroughVS').textContent,
	fragmentShader: document.getElementById('passthroughFS').textContent
})
```

```glsl
// Static colour passed by user
uniform vec4 colour;

void main(void) {
	pc_fragColor = vec4(colour.g, colour.r+colour.b, colour.g, 1.0);
}
```

If we wanted to shader the sphere, like so:

![image-20240311144022962](./res/Shader/image-20240311144022962.png)

We have to define the following vertex shader:

```glsl
// Define the outputs of the vertex shader
// these outputs are passed to the fragment shader
out vec2 texCoords;

void main(void) {
    // Pass texture coordinates down to fragment shader
    // ‘uv’ is predefined by three.js
    texCoords = uv;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

```

And the following fragment shader:

```glsl
in vec2 texCoords;
// Texture map with albedo values
uniform sampler2D albedoMap;

void main(void)
{
    // Read the colour value from ‘albedoMap’ at coordinates ‘texCoords’
    vec4 textureColour = texture2D(albedoMap, texCoords);

    // Write the texture colour to the output
    pc_fragColor = textureColour
}
```

In Three.js, the shader is defined in the following way:

```js
let earthAlbedoMap = new THREE.TextureLoader().load('assets/earthmap.jpg');
let mat = new THREE.ShaderMaterial({
    uniforms: {
        albedoMap: { value: earthAlbedoMap }
    },
    vertexShader: document.getElementById('passthroughVS').textContent,
    fragmentShader: document.getElementById('passthroughFS').textContent
});
```

## light_posData Types

The following numerical types exist:

```glsl
float, vec2, vec3, vec4
int, ivec2, ivec3, ivec4
uint, uvec2, uvec3, uvec4
matn, matnxm, where n, m are 2, 3, or 4
```

Importantly, glsl allows accessing the components of vectors:

```glsl
// Write x and w component of dst from y component of src
dst.xw = src.yy;
```

The following texture data types exist:

```glsl
gsampler1D, gsampler2D, gsampler3D, gsamplerCube, gsampler2DRect
gsampler1DArray, gsampler2DArray, gsamplerCubeArray
gsamplerBuffer, gsampler2DMS, gsampler2DMSArray	
```

## In & Out

## Uniforms

Uniforms are variables that are set by the host and are the same for the entire execution of the shader. Uniforms can be primitive types, constant data buffers, variable sized buffers, read/write images, image sampling and more.

## Lighting with Shaders

![image-20240311150336897](./res/Shader/image-20240311150336897.png)

The following important variable are important: `V`, the direction of the camera, `R`, the vector of the reflection, `N`, the normal vector, and `L` the direction of the light.

The following shader is the vertex shader to calculate spot light lighting for objects.

```glsl
out vec4 positionVS;
out vec3 normalVS;

void main(void)
{
    // Transform the normal to view space and pass to the fragment shader
    normalVS = normalMatrix * normal;
    // Transform the vertex to view space
    positionVS = modelViewMatrix * vec4(position, 1.0);
    // Vertex in Screen Space
    gl_Position = projectionMatrix * positionVS;
}
```

And the following fragment shading:

```glsl
in vec4 positionVS;
in vec3 normalVS;

uniform vec3 lightPosVS;

void main(void) {
    // Account for linear interpolation
	vec3 normalVS2 = normalize(normalVS);
    // Position of the vertex in view space
    vec4 posVS = modelViewMatrix * vec4(position, 1.0);
    // Direction from the vertex to the eye in view space
    vec3 eyeDirVS = -normalize(posVS.xyz);
    vec3 ambientColour = ambient * ambientLightColor;
    vec3 diffuseColour = vec3(0.0);
    vec3 specularColour = vec3(0.0);
   
    for (int i = 0; i < MAX_POINT_LIGHTS; i++) {
        // Position of the light in view space
        vec4 lightPosVS = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );
        // Light direction from the current vertex to the light
        vec3 lightDirVS = normalize(lightPosVS.xyz - posVS.xyz);
        // Distance to the light
        float lightDist = length(lightPosVS.xyz - posVS.xyz);
        // Calculate attenuation
        float attenuation = 1.0 / (1.0 + (lightDist * pointLightDistance[i]));
        // Coefficient for diffuse illumination
        float lambertTerm = dot(lightDirVS, normalVS2);
        // Only compute light if the vertex is visible
        if (lambertTerm > 0.0)         {
            // Compute the diffuse light term
            diffuseColour += pointLightColor[i] * diffuse * lambertTerm * attenuation;
            // Compute the specular light term
            vec3 R = reflect(lightDirVS, normalVS2);
            float specular = pow( max(dot(R, eyeDirVS), 0.0), shininess);
            specularColour += pointLightColor[i] * specular * attenuation;
        }
    }
    
    // Assign final colour
    vertexColour = emissive + ambientColour + diffuseColour + specularColour;
    // Pass the texture coordinates to the fragment shader
    textureCoords = uv;
    // Vertex in Screen Space
	gl_Position = projectionMatrix * posVS;
}
```

This kind of shading is called Phong shading.

## Morth-target Animation (Keyframes)

The following uniforms are necessary:

```glsl
uniform sampler2DArray morphTargetsTexture;
uniform ivec2 morphTargetsTextureSize;

uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
```

The following shader defines the actual implementation of morph-target animation.

```glsl
vec4 getMorph(in int vertexIndex, in int morphTargetIndex)
{
    int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE;
    int y = texelIndex / morphTargetsTextureSize.x;
    int x = texelIndex - y * morphTargetsTextureSize.x;
    ivec3 morphUV = ivec3( x, y, morphTargetIndex );
	return texelFetch( morphTargetsTexture, morphUV, 0 );
}

vec3 morphed = position;
for (int i = 0; i < MORPHTARGETS_COUNT; i++) {
    if (morphTargetInfluences[ i ] != 0.0)
        morphed += getMorph(gl_VertexID, i, 0).xyz * morphTargetInfluences[i];
}
```

## Geometry Instancing

Geometry instancing is a technique where 

## Environment Reflections

<img src="./res/Shader/image-20240311153059709.png" alt="image-20240311153059709" style="zoom:67%;" />

To render 