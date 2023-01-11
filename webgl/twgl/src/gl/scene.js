import { Quad } from "./_quad.js";
import { Post } from "./post/post.js";

export class Scene {
  constructor(gl) {
    this.gl = gl;

    this.create();
  }

  create() {
    this.post = new Post(this.gl);
    this.quad = new Quad(this.gl);
  }

  resize(gl) {
    this.gl = gl;

    this.post?.resize(this.gl);
    this.quad?.resize(this.gl);
  }

  render(t) {
    if (this.post) this.post.setupRender();

    this.quad?.render(t);

    if (this.post) this.post.render(this.time);
  }
}
