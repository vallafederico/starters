import Emitter from "tiny-emitter";

export class Observe extends Emitter {
  constructor({ element, config, addClass, cb }) {
    super();
    this.element = element;
    this.config = {
      root: config?.root || null,
      margin: config?.margin || "10px",
      threshold: config?.threshold || 0,
      autoStart: config?.autoStart || false,
    };

    if (cb) this.cb = cb;

    if (addClass !== undefined) this.addClass = addClass;
    this.init();
    if (this.config.autoStart) this.start();
  }

  init() {
    this.in = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isIn();
          }
        });
      },
      {
        root: this.config.root,
        rootMargin: this.config.margin,
        threshold: this.config.threshold,
      }
    );

    this.out = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            this.isOut();
          }
        });
      },
      {
        root: this.config.root,
        rootMargin: "0px",
        threshold: 0,
      }
    );
  }

  start() {
    this.in.observe(this.element);
    this.out.observe(this.element);
  }

  stop() {
    this.in.unobserve(this.element);
    this.out.unobserve(this.element);
    this.off("IN");
    this.off("OUT");
  }

  isIn() {
    // console.log("in");
    this.emit("IN");

    if (this.cb?.in) this.cb.in();
    if (this.addClass) this.element.classList.add(this.addClass);
  }

  isOut() {
    // console.log("out");
    this.emit("OUT");

    if (this.cb?.out) this.cb.out();
    if (this.addClass) this.element.classList.remove(this.addClass);
  }
}

//utils
