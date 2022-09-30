precision highp float;

uniform float u_time;
varying vec2 v_uv;

void main() {

    gl_FragColor.rgb = vec3(v_uv, 1.);
    gl_FragColor.a = 1.0;
}
