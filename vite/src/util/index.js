export function handleResize(container, cb) {
  new ResizeObserver((entry) => cb(entry[0].contentRect)).observe(container);
}
