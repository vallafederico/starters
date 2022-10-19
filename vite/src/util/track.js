// fix imports
// fix and check code from source
// fins a good name

import { getBoundingClientRect } from "./clientRect";
import { map } from "./math";

export default class {
  constructor({ element }) {
    console.log(element);
    this.element = element || null;

    this.resize();
  }

  resize() {
    this.bounds = getBoundingClientRect(this.element);
    this.height = window.innerHeight;
  }
}

// export default class {
//   constructor({ element }) {
//     this.element = element;
//     this.speed = parseFloat(this.element.dataset.animationSpeed || 1);

//     this.onResize();
//   }

//   onResize() {
//     this.element.style.transform = "";

//     this.bounds = getBoundingClientRect(this.element);
//     this.height = window.innerHeight;
//   }

//   update({ current }) {
//     const amount = 100 * this.speed;
//     const offset = this.bounds.top + this.bounds.height / 2;
//     const parallax = map(
//       offset - current,
//       -this.height,
//       this.height,
//       amount,
//       -amount
//     );

//     this.element.style.transform = `translate3d(0, ${parallax}px, 0)`;
//   }
// }
