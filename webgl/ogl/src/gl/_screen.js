import { Triangle, Mesh } from "ogl";
import Material from "./mat/_screen";

export default class extends Mesh {
  constructor(gl) {
    super(gl);
    this.gl = gl;

    this.geometry = new Triangle(this.gl);
    this.program = new Material(this.gl);
  }

  resize() {}

  render(t) {
    this.program.time = t;
  }
}
