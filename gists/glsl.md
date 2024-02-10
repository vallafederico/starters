# GLSL

## Lights

#### Point Light

```csharp
// basic point light
float ptl = abs(dot(normalize(vec3(1., 1., 1.)), v_normal));

```

```csharp
// color point light
vec3 p_pos = vec3(1., 1., 1.);
vec3 p_col = vec3(1., 1., 1.);
vec3 p_dir = normalize(p_pos - v_normal);
vec3 plight = p_col * max(0., dot(p_dir, v_normal));

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

#### Cubemap Implementation

```csharp

uniform samplerCube u_cube;

// main()
vec3 R = reflect(vec3(0, 0, 8), normalize(v_coords.xyz));

vec3 cube_map = 1. - textureCube(u_cube, v_coords.xyz).rgb;
vec3 cube_map_r = textureCube(u_cube, R).rgb;
float cube_map_l = (cube_map.r + cube_map.g + cube_map.b) / 3.;

col *= 1. - cube_map_r * .1;

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
