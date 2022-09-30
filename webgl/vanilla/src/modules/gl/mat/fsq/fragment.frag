precision mediump float;

uniform vec2 u_res;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;

  gl_FragColor = vec4(uv, 1., 1.);
}
  