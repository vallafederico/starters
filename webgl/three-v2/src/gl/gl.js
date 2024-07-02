import { WebGLRenderer, PerspectiveCamera } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import Scene from "./scene.js";

export class Gl {
  mouse = { x: 0, y: 0 };

  constructor(sel) {
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
    this.renderer.setClearColor(0x000000, 1);
    this.vp.container.appendChild(this.renderer.domElement);

    this.camera = new PerspectiveCamera(
      70, // fov
      this.vp.aspect(), // aspect
      0.1, // near
      1000 // far
    );

    this.camera.position.set(0, 0, 2);
    this.vp.camera = this.camera;
    this.vp.renderer = this.renderer;

    // -- controller
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "p":
          this.paused = !this.paused;
          break;
        case "c":
          this.controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
          );
          break;
      }
    });

    this.paused = false;
    this.time = 0;

    handleResize(this.vp.container, this.resize.bind(this));

    this.init();
  }

  async init() {
    this.scene = new Scene(this.vp);

    // this.render();
  }

  render() {
    if (this.paused) return;
    this.time += 0.05;

    this.controls?.update();

    if (this.scene && this.scene.render) this.scene.render(this.time);

    this.renderer.render(this.scene, this.camera);
    // requestAnimationFrame(this.render.bind(this));
  }

  resize({ width, height }) {
    this.vp.w = width;
    this.vp.h = height;

    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.aspect = this.vp.w / this.vp.h;
    this.camera.updateProjectionMatrix();

    this.scene?.resize(this.vp);
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

  get pixel() {}
}

/** Utils */
function handleResize(container, cb) {
  new ResizeObserver((entry) => cb(entry[0].contentRect)).observe(container);
}
