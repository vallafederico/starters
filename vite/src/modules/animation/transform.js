import { clientRect } from "../../util/clientRect.js";
import { map, clamp } from "../../util/math.js";

export class Transform {
  constructor({ el, config }) {
    this.el = el;

    this.config = {
      bounds: [0, 1],
      ...config,
    };

    this.perc = 0;
    this.resize();
  }

  resize() {
    this.bounds = clientRect(this.el);
    // console.log(this.bounds);
  }

  render() {
    let val = map(
      window.app.scroll.y, // value
      this.bounds.top, // low1
      this.bounds.bottom, // high1
      this.config.bounds[0],
      this.config.bounds[1] // low2, high2
    );

    val = clamp(0, 1, val);
    this.perc = val;
  }
}
