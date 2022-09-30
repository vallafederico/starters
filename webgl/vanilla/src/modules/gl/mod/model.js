import * as twgl from "twgl.js";
//import gsap from "gsap";

import shaders from "../mat/model/m.js";
import { LIB } from "../../../assets/lib.js";
import { loadModelDeep } from "../utils/gltf-loader.js";

export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shouldRender = false;
    this.shaders = shaders;
    this.programInfo = twgl.createProgramInfo(this.gl, this.shaders);

    this.tr = { x: 1, y: 0, z: 0, w: 0 };

    this.load();
  }

  async load() {
    const loaded = await loadModelDeep(LIB.m1);
    const final = loaded[0].arr;
    this.init(final);
  }

  init(arr) {
    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt(arr);
    this.setUniforms();
    this.shouldRender = true;
  }

  setBuffAtt(arr) {
    this.bufferInfo = twgl.createBufferInfoFromArrays(this.gl, arr);
    twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
  }

  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_vs: this.gl.vp.viewSize,
      u_camera: this.gl.camera.mat
    };

    this.gl.useProgram(this.programInfo.program);
    twgl.setUniforms(this.programInfo, this.uniforms);
  }

  render(time) {
    if (!this.shouldRender) return;

    this.gl.useProgram(this.programInfo.program);
    twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);

    twgl.setUniforms(this.programInfo, {
      u_time: time
    });

    twgl.drawBufferInfo(this.gl, this.bufferInfo);
  }

  resize(gl) {
    this.gl = gl;
    twgl.setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_camera: gl.camera.mat
    });
  }
}
