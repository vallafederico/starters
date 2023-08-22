import { Text } from "./animation/text";
import { Track } from "../util/track";
import { Alpha } from "./animation/alpha";

export class Dom {
  constructor() {
    this.create();
  }

  resize() {}

  render(t) {
    // this.track?.render();
  }

  create() {
    this.texts = [
      ...document.querySelectorAll(
        '[data-a="char"],[data-a="word"],[data-a="line"]'
      ),
    ].map((el) => new Text({ element: el }));

    this.alpha = new Alpha({
      element: document.querySelector("[data-a='alpha']"),
    });

    const track = document.querySelector("[data-track]");
    if (track)
      this.track = new Track({
        element: track,
        cb: {
          // in: () => console.log("in"),
          // out: () => console.log("out"),
        },
      });

    this.start();
  }

  start() {
    this.texts.forEach((text) => text.start());
    this.alpha.start();
    this.track?.start();
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
