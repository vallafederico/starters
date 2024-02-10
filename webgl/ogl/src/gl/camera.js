import { Camera } from "ogl";

export class Cam extends Camera {
  constructor(gl, { fov = 25 }) {
    super();

    this.gl = gl;
    this.fov = fov;
  }

  get fovInRad() {
    return (this.fov * Math.PI) / 180;
  }

  getViewSize(ratio) {
    const height = Math.abs(this.position.z * Math.tan(this.fovInRad / 2) * 2);
    return { w: height * ratio, h: height };
  }
}
