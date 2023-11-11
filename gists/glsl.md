# GLSL

## Lights

#### Point Light

```csharp
float ptl = abs(dot(normalize(vec3(1., 1., 1.)), v_normal));

```

#### Hemisphere Light

```csharp
vec3 h_sky = vec3(1., 1., 1.);
vec3 h_ground = vec3(.1, .1, .1);
vec3 h_dir = normalize(vec3(1., -2., 4.));
vec3 hlight = mix(h_ground, h_sky, 1. - dot(h_dir, v_normal));

```

## Materials

#### Matcap Materal

```csharp
// (VERTEX)
vec4 transformed = modelViewMatrix * vec4(position, 1.0) || gl_Position;
v_view = normalize(- transformed.xyz);
v_normal = normal;

// (FRAGMENT)
vec3 x = normalize( vec3(v_view.z, 0., -v_view.x));
vec3 y = cross(v_view, x);
vec2 fakeUv = vec2( dot(x, v_normal), dot(y, v_normal)) * .495 + .5;
);

```

#### Gradient

```csharp
// (FRAGMENT) - Requires DIFF + v_normal
vec3 a = vec3(0.5, 0.5, 0.5);
vec3 b = vec3(0.5, 0.5, 0.5);
vec3 c = vec3(1.0, 1.0, 1.0);
vec3 d = vec3(0.00, 0.33, 0.67);
vec3 finalMovingGradient = a + b * cos(6.28 \_ (c * diff + d + uTime*10.));

```

#### Fresnel (to be fixed?)

```csharp
// (VERTEX)
vec4 worldPosition = modelMatrix _ vec4( position, 1.0);
worldNormal = normalize( modelViewMatrix _ vec4(normal, 0.)).xyz;
viewDirection = normalize(worldPosition.xyz - cameraPosition);

// (FRAGMENT)
float fresnelFunc(vec3 viewDirection, vec3 v_normal) {
    return pow( 1.0 + dot( viewDirection, worldNormal), 3.0 );
}

```

## Effects

#### Plane Scale

```csharp
float startAt = uv.x * .5;
float prog = smoothstep(startAt, 1., u_center);
vec2 scale = vec2(1. + prog);
pos.xy = mix(pos.xy, pos.xy * 2., prog);

```
