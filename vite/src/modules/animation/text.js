import { Observe } from "../../util/observe";
import gsap, { SplitText } from "../../gsap";

export class Text extends Observe {
  constructor(element, { anim = {}, params = {}, once = false } = {}) {
    super(element, {
      // (*) TODOS check
      config: {
        root: null,
        margin: "0px",
        threshold: 0.5,
        autoStart: false,
      },
      addClass: "active",
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
        y: "0%",
      },
      out: {
        y: "150%",
      },
      ...params,
    };

    this.once = once;

    if (element.dataset.a === "line") this.revertTo = this.element.textContent;

    this.create(element);
    this.setOut();
  }

  create(element) {
    this.element = element;
    this.animated = returnSplit(this.element);
  }

  resize() {
    if (!this.revertTo) return;
    this.element.textContent = this.revertTo;
    this.create();
    this.animateIn();
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
      ...this.anim,
    });
  }

  animateOut() {
    this.stop();
    if (this.animation) this.animation.kill();
    this.animation = gsap.to(this.animated, {
      ...this.params.in,
      ...this.anim,
      delay: 0,
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
  const split = new SplitText(el, {
    type: "lines",
  });

  // store.push(split)
  split.lines.forEach((line) => wrapEl(line));

  return split.lines;
}

function wrapEl(el) {
  const wrapper = document.createElement("div");
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
}
