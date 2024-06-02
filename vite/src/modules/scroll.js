import Lenis from "lenis";
import { easeOutExpo } from "../util/easings.js";

const lenisDefault = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

/*

<script>
  // reset scroll to 0 with no timeouts
  history.scrollRestoration = "manual";
</script>

*/

export class Scroll extends Lenis {
  constructor() {
    super({
      duration: 1,
      smoothWheel: true,
      easing: easeOutExpo,
      orientation: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    this.isActive = true;
    this.callbacks = [];

    // this.time = 0;

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

      this.callbackRaf();
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

  render(t) {
    if (!this.isActive) return;

    this.raf(t);
  }

  set active(value) {
    this.isActive = value;
  }

  callbackRaf() {
    // call this in scroll method
    this.callbacks.forEach((cb) => cb());
  }

  subscribe(callback) {
    this.callbacks.push(callback);
  }

  unsubscribe(callback) {
    this.callbacks = this.callbacks.filter((cb) => cb !== callback);
  }

  unsunbscribeAll() {
    this.callbacks = [];
  }
}
