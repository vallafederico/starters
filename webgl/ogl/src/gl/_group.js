import { Transform } from "ogl";

export default class extends Transform {
  constructor(gl) {
    super();
    this.gl = gl;
    this.isOn = false;
  }

  render(t) {
    if (!this.isOn) return;
  }

  resize() {}
}
