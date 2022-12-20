// fix scroll value based on picked boilerplate

export const clientRect = (element) => {
  const bounds = element.getBoundingClientRect();

  let scroll = 0;
  scroll = window.app?.scroll?.y || window.pageYOffset;

  return {
    bottom: bounds.bottom + scroll,
    height: bounds.height,
    // left: bounds.left,
    // right: bounds.right,
    top: bounds.top + scroll,
    // width: bounds.width,
    wh: window.innerHeight,
    // ww: window.innerWidth,
    offset: bounds.top + scroll,
  };
};
