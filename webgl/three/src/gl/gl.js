import { WebGLRenderer } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// import Loader from "./util/loader.js";

import Viewport from "./viewport.js";
import Scene from "./scene.js";
import Camera from "./camera.js";

export class Gl {
  constructor(sel) {
    this.vp = new Viewport();
    this.renderer = new WebGLRenderer({});

    this.renderer.setPixelRatio(this.vp.pixelRatio);
    this.renderer.setSize(this.vp.w, this.vp.h);
    this.renderer.setClearColor(0x000000, 1);
    this.vp.container.appendChild(this.renderer.domElement);

    this.camera = this.vp.camera = new Camera();

    this.camera.position.set(0, 0, 2);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    this.paused = false;
    this.time = 0;

    this.init();
  }

  async init() {
    // this.loader = new Loader();
    // this.assets = await this.loader.load();

    this.create();
    this.initEvents();
    this.render();
  }

  initEvents() {
    // prettier-ignore
    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(this.vp.container);
  }

  create() {
    this.scene = new Scene();
  }

  render() {
    if (this.paused) return;
    this.time += 0.05;

    this.controls?.update();

    if (this.scene && this.scene.render) this.scene.render(this.time);

    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    this.vp.resize();
    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.aspect = this.vp.w / this.vp.h;
    this.camera.updateProjectionMatrix();

    if (this.scene) this.scene.resize();
  }

  /* Utils
   */

  get viewSize() {
    const fovInRad = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(
      this.camera.position.z * Math.tan(fovInRad / 2) * 2
    );
    return { w: height * (this.vp.w / this.vp.h), h: height };
  }
}
