import * as twgl from "twgl.js";

import shaders from "../mat/cam/m.js";

export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shaders = shaders;
    this.programInfo = twgl.createProgramInfo(this.gl, this.shaders);

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.setUniforms();
  }

  setBuffAtt() {
    this.bufferInfo = twgl.primitives.createPlaneBufferInfo(
      this.gl,
      1, // width
      1, // height
      1, // subdx
      1, // subdy
      twgl.m4.rotationX(Math.PI / 2)
    );

    twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
  }

  setUniforms() {
    // this.textures = {
    //   diff0: twgl.createTexture(this.gl, {
    //     src: LIB.img,
    //     mag: this.gl.NEAREST,
    //   }),
    // };

    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_vs: this.gl.vp.viewSize,
      u_camera: this.gl.camera.mat,
      u_num0: 0,
      // u_diff: this.textures.diff0,
    };

    this.gl.useProgram(this.programInfo.program);
    twgl.setUniforms(this.programInfo, this.uniforms);
  }

  render(time) {
    this.gl.useProgram(this.programInfo.program);
    twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    twgl.setUniforms(this.programInfo, { u_time: time });

    twgl.drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    twgl.setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_camera: gl.camera.mat,
    });
  }
}

/* Animation Setters 
  set num0(val) {
    this.gl.useProgram(this.programInfo.program);

    twgl.setUniforms(this.programInfo, {
      u_num0: val
    });
  }
  */
