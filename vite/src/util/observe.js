import Emitter from "tiny-emitter";

export class Observe extends Emitter {
  constructor({ element, config }) {
    super();
    this.element = element;
    this.config = {
      root: config?.root || null,
      margin: config?.margin || "10px",
      threshold: config?.threshold || 0,
    };

    console.log(this.config);

    this.init();
    this.start();
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
        // root: this.config.root,
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
        // root: document.querySelector('#scrollArea'),
        rootMargin: "000px",
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
  }

  isIn() {
    console.log("in");
    this.emit("IN");
  }

  isOut() {
    console.log("out");
    this.emit("OUT");
  }
}

//utils
