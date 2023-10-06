import { Plane, Mesh } from "ogl";
import Material from "./mat/_quad";

export class Quad extends Mesh {
  constructor(gl, diff = null) {
    super(gl, {
      geometry: new Plane(gl),
      program: new Material(gl),
    });

    this.gl = gl;
  }

  resize() {}

  render(t) {
    this.program.time = t;
  }
}
