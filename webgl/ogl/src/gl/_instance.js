import { Plane, Geometry, Mesh } from "ogl";
import Material from "./mat/_insta";

export class Instance extends Mesh {
  constructor(gl, num = 10, { attribs } = {}) {
    if (!attribs) attribs = new Plane(gl).attributes;

    super(gl, {
      geometry: new Geometry(gl, {
        ...attribs,
        ...calcAttributes(num),
      }),
      program: new Material(gl),
    });

    // this.gl = gl;

    const scale = 0.2;
    this.scale.set(scale, scale, scale);
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
