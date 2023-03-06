import gsap from "gsap";
import { Observe } from "../../util/observe";

// NEEDS CHECKING!

export class Alpha extends Observe {
  constructor({ element, anim }) {
    super({
      element,
      config: {
        root: null,
        margin: "10px",
        threshold: 0.8,
      },
    });

    this.anim = {
      d: 1.2,
      ease: "expo.out",
      delay: 0.1,
      each: 0.05,
      from: "start",
      once: false,
      ...anim,
    };

    this.params = {
      in: {
        autoAlpha: 1,
      },
      out: {
        autoAlpha: 1,
      },
    };

    this.element = element;
    this.animated = this.element;
  }

  isIn() {
    this.animateIn();
    if (this.anim.once) this.stop();
  }

  isOut() {
    this.setOut();
  }

  animateIn() {
    if (this.animation) this.animation.kill();
    this.animation = gsap.to(this.animated, {
      ...this.params.in,
      duration: this.anim.d,
      ease: this.anim.ease,
      delay: this.anim.delay,
    });
  }

  animateOut() {
    this.stop();
    if (this.animation) this.animation.kill();
    this.animation = gsap.to(this.animated, {
      ...this.params.out,
      duration: this.anim.d,
      ease: this.anim.ease,
      delay: 0,
    });
  }

  setIn() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { ...this.params.out });
  }

  setOut() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { autoAlpha: 0 });
  }
}
