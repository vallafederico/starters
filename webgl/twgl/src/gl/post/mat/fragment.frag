precision mediump float;
#define MPI 3.14159265359

uniform vec2 u_res;
uniform float u_time;

uniform sampler2D u_diff;


void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec4 diff = texture2D(u_diff, uv);
 
  gl_FragColor.rgb = diff.rgb;
  gl_FragColor.a = 1.;
}
  