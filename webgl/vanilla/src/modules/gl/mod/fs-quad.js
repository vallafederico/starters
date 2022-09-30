import * as twgl from "twgl.js";
import shaders from "../mat/fsq/m.js";

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
    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };
    this.bufferInfo = twgl.createBufferInfoFromArrays(this.gl, arrays);
  }

  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0
    };

    this.gl.useProgram(this.programInfo.program);
    twgl.setUniforms(this.programInfo, this.uniforms);
  }

  render(time) {
    this.gl.useProgram(this.programInfo.program);
    twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    twgl.setUniforms(this.programInfo, {
      u_time: time
    });

    twgl.drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    twgl.setUniforms(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }
}
