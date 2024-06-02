import gsap from "../../gsap";
import { Observe } from "../../util/observe";

// NEEDS CHECKING!

export class Alpha extends Observe {
  constructor(element, { anim, params, once = false }) {
    super({
      element,
      config: {
        root: null,
        margin: "0px",
        threshold: 0.5,
      },
    });

    this.anim = {
      duration: 1.2,
      ease: "expo.out",
      delay: 0.1,
      stagger: {
        each: 0.05,
        from: "start",
      },
      ...anim,
    };

    this.params = {
      in: {
        autoAlpha: 1,
      },
      out: {
        autoAlpha: 0,
      },
      ...params,
    };

    this.once = once;

    this.element = element;
    this.animated = this.element;
  }

  isIn() {
    this.animateIn();
    if (this.once) this.stop();
  }

  isOut() {
    this.setOut();
  }

  animateIn() {
    if (this.animation) this.animation.kill();
    this.animation = gsap.to(this.animated, {
      ...this.params.in,
      ...this.anim,
    });
  }

  animateOut() {
    this.stop();
    if (this.animation) this.animation.kill();
    this.animation = gsap.to(this.animated, {
      ...this.params.out,
      ...this.anim,
    });
  }

  setIn() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { ...this.params.in });
  }

  setOut() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { ...this.params.out });
  }
}
