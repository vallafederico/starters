import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const decoderPath =
  "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(decoderPath); // use a full url path
dracoLoader.preload();

const loader = new GLTFLoader();
loader.setDRACOLoader(dracoLoader);

export default (url) => {
  return new Promise((resolve, reject) => {
    loader.load(url, (gltf) => {
      const result = { model: gltf.scene };
      resolve(result);
    });
  });
};
