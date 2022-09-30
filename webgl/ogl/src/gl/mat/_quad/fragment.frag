precision highp float;

varying vec3 v_normal;
varying vec2 v_uv;



void main() {

  gl_FragColor.rgb = vec3(v_uv, 2.);
  gl_FragColor.a = 1.0;
}
