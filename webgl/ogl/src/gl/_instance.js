import { Plane, Geometry, Mesh } from "ogl";
import Material from "./mat/_insta";

export default class extends Mesh {
  constructor(gl, geomData) {
    super(gl);
    this.gl = gl;
    this.geomData = geomData;

    this.numInstances = 10;
    this.attribs = {
      ...calcAttributes(this.numInstances),
      ...this.geomData.attributes,
    };
    // console.log(this.attribs);

    this.geometry = new Geometry(this.gl, this.attribs);
    this.program = new Material(this.gl);
    this.program.uniforms.uTarget = { value: 0 }; // add for picking

    this.scale.set(0.2, 0.2, 0.2);
  }

  resize() {}

  render(t) {
    this.program.time = t;
    // this.position.x = Math.sin(t) * 0.2;
  }
}

/*
Utils
*/

function calcAttributes(num) {
  let idA = new Float32Array(num * 4);
  let posmodA = new Float32Array(num * 3);
  let randomA = new Float32Array(num * 1);

  for (let i = 0; i < num; i += 1) {
    // set id attribute
    let id = i + 1;
    idA.set(
      [
        ((id >> 0) & 0xff) / 0xff,
        ((id >> 8) & 0xff) / 0xff,
        ((id >> 16) & 0xff) / 0xff,
        ((id >> 24) & 0xff) / 0xff,
      ],
      i * 4
    );
    // set position modification attribute
    posmodA.set(
      [
        Math.random() * 5 - 2.5,
        Math.random() * 5 - 2.5,
        Math.random() * 5 - 2.5,
      ],
      i * 3
    );
    // set random attribute
    randomA.set([Math.random() * 4], i);
  }

  return {
    a_id: { instanced: 1, size: 4, data: idA },
    a_random: { instanced: 1, size: 1, data: randomA },
    a_posmod: { instanced: 1, size: 3, data: posmodA },
  };
}
