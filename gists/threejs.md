# THREEjs

## Shaders

#### Skinned Shader

```csharp
// (VERTEX)

// #include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

void main() {
  // #include <uv_vertex>
  #include <skinbase_vertex>


  vec4 tr = modelViewMatrix * vec4(position, 1.0);
  // gl_Position = projectionMatrix * tr;
  vUv = uv;

  #include <begin_vertex>
  // #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <project_vertex>
  #include <worldpos_vertex>

}

// might want to add (up top)
// #include <common>
// #include <uv_pars_vertex>
// #include <color_pars_vertex>

```
