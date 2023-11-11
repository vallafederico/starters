import { resizeCanvasToDisplaySize } from "twgl.js";

import { Camera } from "./_camera";
import { Scene } from "./scene";

export default class {
  time = 0;

  constructor() {
    this.canvas = document.querySelector("[data-gl='c']");
    this.gl = this.canvas.getContext("webgl");
    this.gl.clearColor(0.04, 0.04, 0.04, 1);
    //this.gl.enable(this.gl.CULL_FACE);
    //this.gl.cullFace(this.gl.BACK);
    //this.gl.enable(this.gl.DEPTH_TEST)

    this.gl.vp = {
      dpr: Math.min(window.devicePixelRatio, 2),
      ww: window.innerWidth,
      wh: window.innerHeight,
    };

    this.gl.camera = new Camera(this.gl);
    this.scene = new Scene(this.gl);

    // prettier-ignore
    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(this.canvas);

    this.render();
  }

  resize() {
    resizeCanvasToDisplaySize(this.gl.canvas, this.gl.vp.dpr);

    this.gl.vp.viewSize = this.viewSize;
    this.gl.vp.ww = window.innerWidth;
    this.gl.vp.wh = window.innerHeight;

    if (this.gl.camera) this.gl.camera = new Camera(this.gl);
    this.scene?.resize(this.gl);
  }

  render() {
    this.time += 0.01;

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.scene.render(this.time);
    requestAnimationFrame(this.render.bind(this));
  }

  get viewSize() {
    const height = Math.abs(
      this.gl.camera.z * Math.tan(this.gl.camera.fov / 2) * 2
    );
    return [height * (this.gl.canvas.width / this.gl.canvas.height), height];
  }
}
