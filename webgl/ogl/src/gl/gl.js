import { Renderer, Transform, Orbit } from "ogl";
import Cam from "./_camera.js";
import Scene from "./_scene.js";

export default class {
  constructor() {
    this.wrapper = document.getElementById("c");
    this.vp = {
      dpr: Math.min(window.devicePixelRatio, 2),
    };

    this.renderer = new Renderer({ dpr: 2 });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 1);

    this.wrapper.appendChild(this.gl.canvas);

    this.camera = new Cam(this.gl, {});
    this.camera.position.set(0, 0, 5);

    // this.camera.lookAt([0, 0, 0]);
    // this.controls = new Orbit(this.camera);

    this.scene = new Scene(this.gl);
    this.time = 0;

    this.resize();
    this.initEvents();

    this.render();
  }

  render(scroll = 0) {
    this.time += 0.5;

    if (this.controls) this.controls.update();
    if (this.scene) this.scene.render(this.time);

    window.requestAnimationFrame(this.render.bind(this));

    this.renderer.render({
      scene: this.scene,
      camera: this.camera,
    });
  }

  initEvents() {
    // resize
    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(
      this.wrapper
    );
    // mouse
    this.mouse = { x: 0, y: 0 };
  }

  resize(entry) {
    const cw = entry ? entry.width : this.wrapper.clientWidth;
    const ch = entry ? entry.height : this.wrapper.clientHeight;

    this.vp.w = cw;
    this.vp.h = ch;
    this.vp.ratio = cw / ch;
    this.vp.viewSize = this.camera.getViewSize(this.vp.ratio);
    this.vp.viewRatio = this.vp.viewSize.w / this.vp.w;
    // this.vp.scrollx = window.scrollX;
    // this.vp.scrolly = window.scrollY;

    this.renderer.setSize(this.vp.w, this.vp.h);
    this.camera.perspective({
      aspect: this.vp.ratio,
    });

    this.scene.resize(this.vp);
    // this.resizeChild();
  }
}
