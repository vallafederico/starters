import { WebGLRenderer, PerspectiveCamera } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { handleResize } from "./utils/index.js";

import Scene from "./scenes/scene.js";
import { Post } from "./post/index.js";

export const config = {
  // guiHidden: import.meta.env.PROD,
  clearColor: 0x000000,
};

export class Gl {
  static time = 0;
  static paused = true;
  static mouse = { x: 0, y: 0 };

  static {
    this.renderer = new WebGLRenderer({
      // antialias: true,
      // alpha: true,
    });

    this.vp = {
      container: document.querySelector('[data-gl="c"]'),
      w: window.innerWidth,
      h: window.innerHeight,
      aspect: () => {
        return this.vp.w / this.vp.h;
      },
      dpr: () => {
        return Math.min(window.devicePixelRatio, 2);
      },
    };

    this.renderer.setPixelRatio(this.vp.dpr());
    this.renderer.setSize(this.vp.w, this.vp.h);
    this.renderer.setClearColor(config.clearColor, 1);
    this.vp.container.appendChild(this.renderer.domElement);

    this.camera = new PerspectiveCamera(
      70, // fov
      this.vp.aspect(), // aspect
      0.1, // near
      1000 // far
    );

    this.vp.camera = this.camera;
    this.vp.renderer = this.renderer;

    this.camera.position.set(0, 0, 2);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = false;

    handleResize(this.vp.container, this.resize.bind(this));

    this.init();
  }

  static async init() {
    queueMicrotask(() => {
      this.scene = new Scene(this.vp);
      this.post = new Post();
      this.paused = false;
    });
  }

  static render() {
    if (this.paused) return;
    this.time += 0.05;
    this.controls?.update();

    this.scene?.render(this.time);
    this.post.renderPost();
  }

  static resize({ width, height }) {
    this.vp.w = width;
    this.vp.h = height;

    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.aspect = this.vp.w / this.vp.h;
    this.camera.updateProjectionMatrix();

    this.scene?.resize(this.vp);
  }

  /* Utils */

  static get viewSize() {
    const fovInRad = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(
      this.camera.position.z * Math.tan(fovInRad / 2) * 2
    );
    return { w: height * (this.vp.w / this.vp.h), h: height };
  }

  static get pixel() {}
}
