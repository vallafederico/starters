// Linear easing (already in the library)
export function easeLinear(t, b, c, d) {
  return (c * t) / d + b;
}

// Quadratic easing
export function easeInQuad(t, b, c, d) {
  t /= d;
  return c * t * t + b;
}

export function easeOutQuad(t, b, c, d) {
  t /= d;
  return -c * t * (t - 2) + b;
}

export function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

// Cubic easing
export function easeInCubic(t, b, c, d) {
  t /= d;
  return c * t * t * t + b;
}

export function easeOutCubic(t, b, c, d) {
  t = t / d - 1;
  return c * (t * t * t + 1) + b;
}

export function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

// Expo easing
export function easeOutExpo(t, b, c, d) {
  return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
}

/** Tween class */
export class Tween {
  constructor(target, properties, config = {}) {
    this.init(target, properties, config);
    this.start();
  }

  init(target, properties, config = {}) {
    this.target = target;
    this.properties = Object.keys(properties || {});
    this.from = this.properties.map((prop) => target[prop]);
    this.to = this.properties.map((prop) => properties[prop]);
    this.duration = config.duration || 1000;
    this.easing = config.easing || easeOutExpo;
    this.onUpdate = config.onUpdate;
    this.onComplete = config.onComplete;
    this.startTime = null;
    return this;
  }

  start() {
    if (!this.startTime) {
      this.startTime = performance.now();
      Tween.activeTweens.push(this);
      if (!Tween.animationFrame) {
        Tween.animationFrame = requestAnimationFrame(Tween.tick);
      }
    }
  }

  static tick(time) {
    Tween.animationFrame = requestAnimationFrame(Tween.tick);
    const activeTweens = Tween.activeTweens;
    let i = activeTweens.length;

    while (i--) {
      const tween = activeTweens[i];
      const elapsed = time - tween.startTime;

      if (elapsed < tween.duration) {
        tween.properties.forEach((prop, index) => {
          tween.target[prop] = tween.easing(
            elapsed,
            tween.from[index],
            tween.to[index] - tween.from[index],
            tween.duration
          );
        });

        if (tween.onUpdate) {
          tween.onUpdate();
        }
      } else {
        tween.properties.forEach((prop, index) => {
          tween.target[prop] = tween.to[index];
        });

        if (tween.onComplete) {
          tween.onComplete();
        }
        Tween.pool.push(tween);
        activeTweens.splice(i, 1);
      }
    }

    if (activeTweens.length === 0) {
      cancelAnimationFrame(Tween.animationFrame);
      Tween.animationFrame = null;
    }
  }
}

Tween.activeTweens = [];
Tween.pool = [];

/*
import { Tween, easeInQuad } from "./util/tween";

const obj = { x: 0 };

const tw = new Tween(
  obj,
  { x: 100 },
  {
    duration: 1000,
    easing: easeInQuad,
    // onUpdate: () => console.log("Tween updated:", obj.x),
    onComplete: () => console.log("Animation complete!"),
  }
);
*/
