import { clientRect } from "../../util/clientRect.js";
import { map, clamp } from "../../util/math.js";

export class Transform {
  constructor({ element, config }) {
    this.el = element;

    this.config = {
      bounds: [0, 1],
      ...config,
    };

    this.perc = 0;
    this.resize();
  }

  resize() {
    this.bounds = clientRect(this.el);
    // console.log("resize", this.bounds);
  }

  render() {
    this.perc = clamp(
      0,
      1,
      map(
        window.sscroll.y, // value
        this.bounds.top, // low1
        this.bounds.bottom, // high1
        this.config.bounds[0],
        this.config.bounds[1] // low2, high2
      )
    );

    // console.log(this.perc);
  }
}
