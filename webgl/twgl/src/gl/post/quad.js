import {
  createProgramInfo,
  createBufferInfoFromArrays,
  setUniforms,
  setBuffersAndAttributes,
  drawBufferInfo,
} from "twgl.js";

import shaders from "./mat/";

export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.setUniforms();
  }

  /**
   * Create
   */

  setBuffAtt() {
    this.bufferInfo = createBufferInfoFromArrays(this.gl, {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
    });
  }

  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0,
    };

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, this.uniforms);
  }

  render(time, diff = null) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, {
      u_time: time,
      u_diff: diff,
    });

    drawBufferInfo(this.gl, this.bufferInfo, this.gl.TRIANGLE_STRIP);
    // this.gl.LINES
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
    });
  }
}
