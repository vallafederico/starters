import * as twgl from "twgl.js";

import Camera from "./gl/utils/camera.js";

import Quad from "./gl/mod/plane.js";
//import Instanced from "./gl/mod/instance.js";
//import Model from "./gl/mod/model.js";
//import Fsq from "./gl/mod/fs-quad.js";

export default class {
  constructor() {
    this.canvas = document.getElementById("c");
    this.gl = this.canvas.getContext("webgl");
    this.gl.clearColor(0.04, 0.04, 0.04, 1);
    this.gl.vp = { dpr: Math.min(window.devicePixelRatio, 2) };
    //this.gl.enable(this.gl.CULL_FACE);
    //this.gl.cullFace(this.gl.BACK);
    //this.gl.enable(this.gl.DEPTH_TEST)

    this.camera = new Camera(this.gl);
    this.gl.camera = this.camera.get(this.gl);

    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

    this.addMesh();

    this.time = 0;

    this.render();
    this.resize();
  }

  addMesh() {
    // this.fsq = new Fsq(this.gl);
    this.quad = new Quad(this.gl);
    //this.instance = new Instanced(this.gl);
  }

  render() {
    this.time += 0.01;

    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    //if (this.fsq) this.fsq.render(this.time);
    if (this.quad) this.quad.render(this.time);
    //if (this.instance) this.instance.render(this.time);

    requestAnimationFrame(this.render.bind(this));
  }

  resize() {
    twgl.resizeCanvasToDisplaySize(this.gl.canvas, this.gl.vp.dpr);
    this.gl.vp = { viewSize: this.viewSize };
    if (this.gl.camera) this.gl.camera = this.camera.get(this.gl);

    if (this.quad) this.quad.resize(this.gl);
    //if (this.instance) this.instance.resize(this.gl);
  }

  get viewSize() {
    const height = Math.abs(this.gl.camera.z * Math.tan(this.gl.camera.fov / 2) * 2);
    return [height * (this.gl.canvas.width / this.gl.canvas.height), height];
  }
}

/*
initEvents() {
  document.onclick = () => this.animate();
}

animate(value = 1) {
  if (this.animationIn === true) {
    this.quad.num0 = 0;
    this.animationIn = false;
  } else {
    gsap.to(this.quad, {
      num0: 1,
      duration: 1.5,
      ease: "expo.out"
    });
    this.animationIn = true;
  }
}
*/
