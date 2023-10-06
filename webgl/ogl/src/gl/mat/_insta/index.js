import { Program } from "ogl";
import vertex from "./vertex.vert";
import fragment from "./fragment.frag";

export default class extends Program {
  constructor(gl, options = {}) {
    super(gl, {
      vertex: vertex,
      fragment: fragment,
      transparent: true,
      cullFace: null,
      // depthTest: false,
      // depthWrite: false,
    });

    this.uniforms = {
      u_time: { value: 0 },
    };
  }

  set time(t) {
    this.uniforms.u_time.value = t;
  }
}
