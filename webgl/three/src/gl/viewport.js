export default class {
  constructor(sel = "c") {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);
    this.container = document.getElementById(sel);
  }

  resize() {
    this.w = this.container.offsetWidth;
    this.h = this.container.offsetHeight;
  }

  get viewSize() {
    const fovInRad = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(
      this.camera.position.z * Math.tan(fovInRad / 2) * 2
    );
    return { w: height * (this.w / this.h), h: height };
  }
}
