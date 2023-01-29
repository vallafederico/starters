import Lenis from "@studio-freight/lenis";
import { easeOutExpo } from "../util/easings.js";

// export function customExpo(x) {
//   return Math.min(1, 1.001 - Math.pow(2, -10 * x));
// }

export default class extends Lenis {
  constructor() {
    super({
      duration: 1,
      smooth: true,
      easing: easeOutExpo,
      direction: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    this.isActive = true;
    this.timeFactor = 10;
    this.time = 0;

    this.init();
    window.sscroll = this;
  }

  init() {
    this.y = window.scrollY;
    this.max = window.innerHeight;
    this.speed = 0;
    this.percent = this.y / (document.body.scrollHeight - window.innerHeight);

    this.on("scroll", ({ scroll, limit, velocity, progress }) => {
      this.y = scroll || 0;
      this.max = limit || window.innerHeight;
      this.speed = velocity || 0;
      this.percent = progress || 0;
    });
  }

  to(target) {
    this.scrollTo(target, {
      offset: 0,
      duration: 0.8,
      easing: easeOutExpo,
      immediate: false,
    });
  }

  resize() {}

  render() {
    if (!this.isActive) return;

    this.raf((this.time += this.timeFactor));
  }

  /**
   * @param {boolean} value
   */
  set active(value) {
    this.isActive = value;
  }
}
