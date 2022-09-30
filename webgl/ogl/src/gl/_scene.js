import { Transform } from "ogl";

import Quad from "./_quad.js";

export default class extends Transform {
  constructor(gl, data = {}) {
    super();
    this.gl = gl;
    this.isOn = true;

    this.create();
  }

  create() {
    /* Basic Quad */
    this.quad = new Quad(this.gl);
    this.quad.setParent(this);
  }

  render(t) {
    if (!this.isOn) return;
    if (this.quad) this.quad.render(t);
    if (this.quads) this.quads.forEach((item) => item.render(t));
  }

  resize(vp) {
    this.vp = vp;
    if (this.quad) this.quad.resize(vp);
  }
}
