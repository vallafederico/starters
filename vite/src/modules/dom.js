import { Text } from "./animation/text";

export default class {
  constructor() {}

  resize() {}

  /* -- Text */

  createText() {
    const chars = [...document.querySelectorAll('[data-a="char"]')];
    const words = [...document.querySelectorAll('[data-a="word"]')];
    const lines = [...document.querySelectorAll('[data-a="line"]')];

    this.text = {
      chars: chars.map((el) => new Text({ element: el })),
      words: words.map((el) => new Text({ element: el })),
      lines: lines.map((el) => new Text({ element: el })),
    };
  }

  destroyText() {
    this.text.chars.forEach((char) => char.animateOut());
    this.text.words.forEach((word) => word.animateOut());
    this.text.lines.forEach((line) => line.animateOut());
  }

  /* --  Pages */

  transitionOut(page) {
    // console.log("DOM•tranOut", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

  transitionIn(page) {
    // console.log("DOM•tranIn", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
}
