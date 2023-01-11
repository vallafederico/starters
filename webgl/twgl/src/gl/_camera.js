import { m4 } from "twgl.js";
export class Camera {
  constructor(
    gl,
    data = {
      z: -3,
      fov: 0.6,
      near: 1,
      far: 1024,
    }
  ) {
    data.fov = degToRad(35);
    this.camera = data;
    // this.get(gl);

    this.camera.mat = m4.translate(
      m4.perspective(
        this.camera.fov,
        gl.canvas.width / gl.canvas.height,
        this.camera.near,
        this.camera.far
      ),
      [0, 0, this.camera.z]
    );

    return this.camera;
  }
}

function degToRad(d) {
  return (d * Math.PI) / 180;
}
