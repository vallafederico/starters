uniform float opacity;
uniform sampler2D tDiffuse;
varying vec2 vUv;

void main() {
    gl_FragColor.rgb = texture2D( tDiffuse, vUv ).rgb;
    gl_FragColor.a = 1.;
}


/** post */
// gl_FragColor.rgb = ACESFilmicToneMapping(diff.rgb);
// gl_FragColor.a = 1.;
// gl_FragColor = linearToOutputTexel(gl_FragColor);