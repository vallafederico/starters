import { Plane, Mesh } from "ogl";
import Material from "./mat/_quad";

import { domSize } from "./util/domitem.js";

export default class extends Mesh {
  constructor(gl, el = null, vp = {}) {
    super(gl);
    this.gl = gl;
    this.el = el;
    this.vp = vp;

    this.geometry = new Plane(this.gl);
    this.program = new Material(this.gl);

    // this.place();
  }

  place() {
    const { x, y, w, h } = domSize(this.el, this.vp);
    this.scale.x = w;
    this.scale.y = h;
    this.position.x = x;
    this.position.y = y;
  }

  resize(vp) {
    this.vp = vp;
    this.place();
  }

  render(t) {}
}
