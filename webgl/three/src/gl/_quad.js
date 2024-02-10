import { Mesh, PlaneGeometry } from "three";
import PlaneMaterial from "./mat/raw";

export class Quad extends Mesh {
  constructor(data = {}) {
    super();
    this.data = data;

    this.geometry = new PlaneGeometry(1, 1, 1, 1);
    this.material = new PlaneMaterial();
  }

  render(t) {
    // console.log(t);
  }
}

function findGroup(obj) {
  if (obj.isGroup === true) {
    return obj;
  }

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      const result = findGroup(obj[key]);
      if (result) {
        return result;
      }
    }
  }

  return null;
}
