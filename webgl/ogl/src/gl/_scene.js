import { Transform } from "ogl";

import { Quad } from "./_quad.js";

import { loadAssets } from "./util/loader.js";
// import { Instance } from "./_instance.js";

export class Scene extends Transform {
  constructor(gl, data = {}) {
    super();
    this.gl = gl;
    this.isOn = true;

    this.create();
  }

  async create() {
    /* Basic Quad */

    this.quad = new Quad(this.gl);
    this.quad.setParent(this);

    // const ass = await loadAssets(this.gl);
    // console.log(ass);
  }

  render(t) {
    if (!this.isOn) return;
    if (this.quad) this.quad.render(t);
    // if (this.quads) this.quads.forEach((item) => item.render(t));
  }

  resize(vp) {
    this.vp = vp;
    if (this.quad) this.quad.resize(vp);
  }
}
