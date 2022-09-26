import { assets } from "../../assets/";
import loadTexture from "./texture-loader";

export default class {
  constructor(data) {
    this.data = data;
  }

  async load() {
    const [diffuse] = await Promise.all([loadTexture(assets.tx)]);

    return {
      diffuse,
      ratio:
        diffuse.source.data.naturalWidth / diffuse.source.data.naturalHeight
    };
  }
}
