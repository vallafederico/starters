import { ASSETS } from "../../assets/";
import loadTexture from "./texture-loader";
import loadModel from "./model-loader";

export default class {
  constructor(data) {
    this.data = data;
  }

  async load() {
    console.time("::");
    // const [diffuse] = await Promise.all([loadTexture(assets.tx)]);
    // return {
    //   diffuse,
    //   ratio:
    //     diffuse.source.data.naturalWidth / diffuse.source.data.naturalHeight,
    // };

    window.loaded = {};
    console.timeEnd("::");
  }

  pipeload() {}
}
