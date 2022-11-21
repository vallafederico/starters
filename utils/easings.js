// https://easings.net/

const PI = Math.PI;

export function easeOutSine(x) {
  return Math.sin((x * Math.PI) / 2);
}

export function easeInOutSine(x) {
  return -(Math.cos(PI * x) - 1) / 2;
}

export function easeOutExpo(x) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

export function easeInOutExpo(x) {
  return x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;
}