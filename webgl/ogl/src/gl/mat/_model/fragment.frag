precision highp float;

varying vec3 v_normal;
varying vec2 v_uv;
varying vec4 v_color;


void main() {

    gl_FragColor.rgb = vec3(v_uv, 1.);
    gl_FragColor.a = 1.0;
}
