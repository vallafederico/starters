import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export default (url, id) => {
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => {
      const result = { model: gltf.scene };
      resolve(result);
    });
  });
};




// import regeneratorRuntime from "regenerator-runtime";
// import loadModel from '../js/utils/model-loader.js'

// this.model = await this.createModel();
// this.model.material = this.material;
// this.scene.add(this.model)

// async createModel() {
//     let { model } = await loadModel( MODEL_URL );
//     return model.children[0];
//   }



// gltf.scene.traverse(o => {
//       if(o.isMesh) {
//         o.material = this.material;
//         this.scene.add(o);
//       }
//     })
