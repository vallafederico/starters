import { Scene } from "three";
import { Quad } from "./_quad.js";

export default class extends Scene {
  constructor(vp, {} = {}) {
    super();
    this.vp = vp;

    this.create();
  }

  create() {
    this.quad = new Quad();
    this.add(this.quad);
  }

  render(t) {
    if (this.quad) this.quad.render(t);
  }

  resize(vp) {
    this.vp = vp;
  }
}
