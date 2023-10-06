import { Mesh, Box } from "ogl";
import Material from "./mat/_model";

export default class extends Mesh {
  constructor(gl, geometry = new Box(gl)) {
    super(gl, {
      geometry: geometry,
      program: new Material(gl),
    });

    this.gl = gl;
  }

  resize() {}

  render(t) {
    this.program.time = t;
    // this.position.x = Math.sin(t) * 0.2;
  }
}
