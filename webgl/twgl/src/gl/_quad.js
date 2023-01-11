import {
  createProgramInfo,
  primitives,
  m4,
  setBuffersAndAttributes,
  setUniforms,
  drawBufferInfo,
} from "twgl.js";

import shaders from "./mat/quad";

export class Quad {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.setUniforms();
  }

  setBuffAtt() {
    this.bufferInfo = primitives.createPlaneBufferInfo(
      this.gl,
      1, // width
      1, // height
      1, // subdx
      1, // subdy
      m4.rotationX(Math.PI / 2)
    );

    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
  }

  setUniforms() {
    // this.textures = {
    //   diff0: createTexture(this.gl, {
    //     src: LIB.img,
    //     mag: this.gl.NEAREST,
    //   }),
    // };

    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_vs: this.gl.vp.viewSize,
      u_camera: this.gl.camera.mat,
      // u_diff: this.textures.diff0,
    };

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, this.uniforms);
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_camera: gl.camera.mat,
    });
  }

  render(time) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, { u_time: time });

    drawBufferInfo(this.gl, this.bufferInfo, this.gl.TRIANGLE_STRIP);
    // this.gl.LINES
  }
}
