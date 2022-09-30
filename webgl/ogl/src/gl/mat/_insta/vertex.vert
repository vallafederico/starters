#define MPI 3.1415926538
#define MTAU 6.28318530718

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;
attribute vec3 a_posmod;
attribute float a_random;
attribute vec4 a_id;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float u_time;

varying vec3 v_normal;
varying vec2 v_uv;
// varying vec4 v_id;

void main() {
  vec3 pos = position;
  pos += a_posmod;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

  v_normal = normalize(normalMatrix * normal);
  v_uv = uv;
  // v_id = a_id;
}
