import Emitter from "tiny-emitter";

export class Observe extends Emitter {
  constructor(element, config = {}, autoinit = true) {
    super();
    this.element = element;
    this.config = {
      root: config.root || null,
      margin: config.margin || "10px",
      threshold: config.threshold || 0,
      autoinit: autoinit,
    };

    this.init();
  }

  init() {
    this.in = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("in");
            this.emit("IN");
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
            console.log("out");
            this.emit("OUT");
          }
        });
      },
      {
        // root: document.querySelector('#scrollArea'),
        rootMargin: "000px",
        threshold: 0,
      }
    );

    if (this.config.autoinit) this.start();
  }

  start() {
    this.in.observe(this.element);
    this.out.observe(this.element);
  }

  stop() {
    this.in.unobserve(this.element);
    this.out.unobserve(this.element);
  }
}

//utils
