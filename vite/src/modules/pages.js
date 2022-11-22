import { Core } from "@unseenco/taxi";

export default class extends Core {
  constructor() {
    super({
      links: "a:not([target]):not([href^=\\#]):not([data-taxi-ignore])",
      removeOldContent: true,
      allowInterruption: false,
      bypassCache: false,
      transitions: {
        default: Tra,
      },
    });

    // this.initEvents();
    window.router = this;
  }

  async transitionOut(page) {
    await Promise.allSettled([
      window.app.dom.transitionOut(page),
      // window.app.gl.transitionOut(page),
    ]);

    // console.log("transition Out", page);
    return Promise.resolve();
  }

  async transitionIn(page) {
    await Promise.allSettled([
      window.app.dom.transitionIn(page),
      // window.app.gl.transitionIn(page),
    ]);

    // console.log("transition In", page);
    return Promise.resolve();
  }
}

// initEvents() {
//   this.on("NAVIGATE_IN", ({ to, trigger }) => {
//     // console.log("IN", to, trigger);
//   });

//   this.on("NAVIGATE_OUT", ({ from, trigger }) => {
//     // console.log("OUT", from, trigger);
//   });

//   this.on("NAVIGATE_END", ({ to, from, trigger }) => {
//     // console.log("END", to, from, trigger);
//   });
// }

/* -- Transition */
class Tra {
  constructor({ wrapper }) {
    this.wrapper = wrapper;
  }

  leave(props) {
    return new Promise((resolve) => {
      this.onLeave({ ...props, done: resolve });
    });
  }

  enter(props) {
    return new Promise((resolve) => {
      this.onEnter({ ...props, done: resolve });
    });
  }

  onLeave({ from, trigger, done }) {
    window.app.pages.transitionOut(from).then(() => done());
  }

  onEnter({ to, trigger, done }) {
    window.app.pages.transitionIn(to).then(() => done());
  }
}
