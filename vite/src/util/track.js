import { clientRect } from "./clientRect.js";
import { map, clamp, lerp } from "./math.js";
import { Observe } from "./observe.js";

/**
 * Represents a track that observes an element and renders based on scroll position.
 * @extends Observe
 * @constructor
 * @param {Object} options - The options for the track.
 * @param {HTMLElement} options.element - The element to observe.
 * @param {Object} options.config - The configuration options for the track.
 * @param {Function} options.cb - The callback function to execute on render.
 * @param {string} options.addClass - The class to add to the element on render.
 */

export class Track extends Observe {
  constructor({ element, config, cb, addClass }) {
    super({ element, config, cb, addClass });
    this.element = element;

    this.config = {
      bounds: [0, 1],
      top: "bottom",
      bottom: "top",
      ...config,
    };

    this.value = 0;
    this.resize();

    if (window.sscroll) window.sscroll.subscribe(this.render.bind(this));
  }

  resize() {
    this.bounds = computeBounds(this.element, this.config);
  }

  render() {
    this.value = clamp(
      0,
      1,
      map(
        window.sscroll.y, // value
        this.bounds.top, // low1
        this.bounds.bottom, // high1
        this.config.bounds[0],
        this.config.bounds[1] // low2, high2
      )
    );

    this.afterRender();
  }

  afterRender() {}
}

// ---------
function computeBounds(el, config) {
  const bounds = clientRect(el);

  switch (config.top) {
    case "top":
      bounds.top = bounds.top;
      break;
    case "center":
      bounds.top = bounds.top - bounds.wh / 2;
      break;
    case "bottom":
      bounds.top = bounds.top - bounds.wh;
      break;
  }

  switch (config.bottom) {
    case "top":
      bounds.bottom = bounds.bottom;
      break;
    case "center":
      bounds.bottom = bounds.bottom - bounds.wh / 2;
      break;
    case "bottom":
      bounds.bottom = bounds.bottom - bounds.wh;
      break;
  }

  return { ...bounds };
}
