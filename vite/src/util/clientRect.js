export const clientRect = (element) => {
  const bounds = element.getBoundingClientRect();

  let scroll = 0;
  scroll = window.app?.scroll?.y || window.pageYOffset;

  return {
    // screen
    top: bounds.top + scroll,
    bottom: bounds.bottom + scroll,
    width: bounds.width,
    height: bounds.height,
    left: bounds.left,
    right: bounds.right,
    wh: window.innerHeight,
    ww: window.innerWidth,
    offset: bounds.top + scroll,
    // centery: bounds.top + scroll + bounds.height / 2, // check if correct
    // centerx: bounds.left + bounds.width / 2, // check if correct
  };
};

// to check
export const clientRectGl = (element, ratio = 1) => {
  const bounds = clientRect(element);

  for (const [key, value] of Object.entries(bounds))
    bounds[key] = value * ratio;

  return bounds;
};
