export class Observe {
  /**
   * Creates an instance of Observe.
   * @param {Object} options - The options object.
   * @param {HTMLElement} options.element - The element to observe.
   * @param {Object} [options.config] - The IntersectionObserver configuration options.
   * @param {HTMLElement} [options.config.root=null] - The element that is used as the viewport for checking visibility of the target.
   * @param {string} [options.config.margin='10px'] - Margin around the root element.
   * @param {number} [options.config.threshold=0] - A threshold of 0.0 means that the target will be visible when it intersects with the root element.
   * @param {boolean} [options.config.autoStart=false] - Whether to start observing the element automatically.
   * @param {string} [options.addClass] - The CSS class to add to the element when it is in view.
   * @param {Object} [options.cb] - The callback functions to execute when the element is in or out of view.
   * @param {Function} [options.cb.in] - The function to execute when the element is in view.
   * @param {Function} [options.cb.out] - The function to execute when the element is out of view.
   */

  constructor(element, { config, addClass, cb } = {}) {
    this.element = element;

    // (*) TODOS check
    this.config = {
      root: null,
      margin: "10px",
      threshold: 0,
      autoStart: false,
      ...config,
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
    // this.off("IN");
    // this.off("OUT");
  }

  isIn() {
    // console.log("in");
    // this.emit("IN");

    if (this.cb?.in) this.cb.in();
    if (this.addClass) this.element.classList.add(this.addClass);
  }

  isOut() {
    // console.log("out");
    // this.emit("OUT");

    if (this.cb?.out) this.cb.out();
    if (this.addClass) this.element.classList.remove(this.addClass);
  }
}

//utils
