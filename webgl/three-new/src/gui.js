import GUI from "lil-gui";
import { Gl } from "./gl/gl";

const config = {
  guiHidden: import.meta.env.PROD,
};

const g = new GUI();
g.close();

const createObservableObject = (obj) => {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      //   console.log("set", { prop, value, target });
      add(target, prop, value);
      return true;
    },
  });
};

/* ---  add utils */
function add(target, prop, value, addTo = g) {
  switch (typeof value) {
    case "number":
      addNumber(target, prop, value, addTo);
      break;
    case "object":
      addObject(target, prop, value, addTo);
      break;
    case "boolean":
      addBoolean(target, prop, value, addTo);
      break;
    case "function":
      addFunction(target, prop, value, addTo);
      break;

    default:
      console.warn(typeof value, "NOTHING ADDED, NO TYPE");
      break;
  }
}

function addNumber(target, prop, value, addTo) {
  const minmax = value < 1 ? [0, 1] : [0, 100];
  addTo.add(target, prop, minmax[0], minmax[1]);
}

function addBoolean(target, prop, value, addTo) {
  addTo.add(target, prop);
}

function addFunction(target, prop, value, addTo) {
  addTo.add(target, prop);
}

function addObject(target, prop, value) {
  const folder = g.addFolder(prop);
  folder.close();

  for (const key in value) {
    add(value, key, value[key], folder);
  }
}

/* ---  general controllers */
let { guiHidden } = config;
if (guiHidden) g.hide();

document.addEventListener("keydown", (e) => {
  if (e.key === "o") {
    Gl.controls.enabled = !Gl.controls.enabled;
  } else if (e.key === "g") {
    guiHidden = !guiHidden;
    if (guiHidden) g.hide();
    else g.show();
  }
});

// * exports
export const Gui = createObservableObject({});

// *********** test

// Gui.bro = 10;

// Gui.obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// Gui.bool = true;
// Gui.func = () => {
//   console.log("func");
// };
