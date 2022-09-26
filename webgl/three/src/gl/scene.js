import { Scene } from "three";
import Quad from "./quad.js";

export default class extends Scene {
  constructor(data = {}) {
    super();
    this.data = data;

    this.create();
  }

  create() {
    this.quad = new Quad();
    this.add(this.quad);
  }

  render(t) {
    if (this.quad) this.quad.render(t);
  }

  resize() {}
}
