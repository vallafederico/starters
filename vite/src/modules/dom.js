import { Text } from "./animation/text";
// import { Track } from "../util/track";
// import { Alpha } from "./animation/alpha";

const lib = [
  {
    selector: '[data-a="char"],[data-a="word"],[data-a="line"]',
    class: Text,
  },
];

export class Dom {
  constructor() {
    this.create();
  }

  resize() {}

  render(t) {
    this.children.forEach((child) => {
      if (child.render) child.render();
    });
  }

  get _children() {
    const arr = lib.map((item) => {
      const { selector, class: Class } = item;
      const elements = [...document.querySelectorAll(selector)];

      if (elements.length === 0) return null;
      return elements.map((element) => new Class(element));
    });

    return arr;
  }

  create() {
    this.children = this._children.flat().filter((child) => child !== null);

    this.start();
  }

  start() {
    this.children.forEach((child) => {
      if (child.start) child.start();
    });
  }

  destroy() {
    this.texts.forEach((text) => text.animateOut());
  }

  /* --  Pages */
  transitionOut(page) {
    // console.log("DOM::transitionOut", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }

  transitionIn(page) {
    // console.log("DOM::transitionIn", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
  }
}
