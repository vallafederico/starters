import { createTexture } from "twgl.js";

export async function loadTexture(gl, src) {
  if (src.constructor !== Array) src = [src];
  return await Promise.all(src.map((s) => promiseLoad(gl, s)));
}

function promiseLoad(gl, src) {
  if (typeof src !== "string") src = src.image;

  return new Promise((resolve) => {
    createTexture(
      gl,
      {
        src,
        mag: gl.NEAREST,
        crossOrigin: "anonymous",
      },

      (err, texture, source) => {
        const ratio = [
          Math.min(source.naturalHeight / source.naturalWidth, 1),
          Math.min(source.naturalWidth / source.naturalHeight, 1),
        ];

        // console.log(ratio)

        resolve({ texture, ratio });
      }
    );
  });
}
