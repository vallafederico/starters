import regeneratorRuntime from "regenerator-runtime/runtime";
import { Plane, Mesh } from "ogl";
import Material from "./mat/_model";

export default class extends Mesh {
  constructor(gl, geometry = null) {
    super(gl);
    this.gl = gl;

    this.geometry = geometry;
    this.program = new Material(this.gl);

    // this.mesh.position.x = 1;
    // this.load();
  }

  resize() {}

  render(t) {
    this.program.time = t;
    // this.position.x = Math.sin(t) * 0.2;
  }
}
