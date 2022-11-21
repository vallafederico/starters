import { Observe } from "../../util/observe";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export class Text extends Observe {
  constructor({ element, anim }) {
    super({
      element,
      config: {
        root: null,
        margin: "10px",
        threshold: 0.8,
      },
      addClass: "active",
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

    this.element = element;
    this.animated = returnSplit(this.element);

    this.setOut();
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
      y: "0%",
      duration: this.anim.d,
      ease: this.anim.ease,
      delay: this.anim.delay,
      stagger: {
        each: this.anim.each,
        from: this.anim.from,
      },
    });
  }

  animateOut() {
    this.stop();
    if (this.animation) this.animation.kill();
    this.animation = gsap.to(this.animated, {
      y: "200%",
      duration: this.anim.d,
      ease: this.anim.ease,
      delay: 0,
      stagger: {
        each: this.anim.each * 0.1,
        from: this.anim.from,
      },
    });
  }

  setIn() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { y: "0%" });
  }

  setOut() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { y: "200%" });
  }
}

/* --- Helpers --- */
function returnSplit(element) {
  switch (element.dataset.a) {
    case "char":
      return splitChar(element);
      break;
    case "word":
      return splitWord(element);
      break;
    case "line":
      return splitLine(element);
      break;
    default:
      return splitChar(element);
  }
}

function splitChar(el) {
  return new SplitText(splitLine(el), {
    type: "chars",
  }).chars;
}
function splitWord(el) {
  return new SplitText(splitLine(el), {
    type: "words",
  }).words;
}
function splitLine(el) {
  const line = new SplitText(el, {
    type: "lines",
  }).lines;
  return new SplitText(line, {
    type: "lines",
  }).lines;
}
