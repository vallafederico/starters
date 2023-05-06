import { ASSETS } from "../../assets/";
import { loadTexture } from "./texture-loader";

export default class {
  constructor(gl) {
    this.gl = gl;
  }

  async load() {
    // const [diffuse] = await Promise.all([loadTexture(this.gl, assets.tx)]);
    // return {
    //   diffuse,
    //   ratio:
    //     diffuse.source.data.naturalWidth / diffuse.source.data.naturalHeight,
    // };
  }
}
