import { clientRect } from "./clientRect.js";
import { map, clamp, lerp } from "./math.js";

export class Track {
  constructor({ element, config }) {
    this.element = element;

    this.config = {
      bounds: [0, 1],
      top: "bottom",
      bottom: "top",
      ...config,
    };

    this.value = 0;
    this.resize();
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
  }
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
