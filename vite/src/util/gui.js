import GUI from "lil-gui";

window.gui = new GUI();

gui.params = {
  progress: 0,
};

gui.add(gui.params, "progress", 0, 1, 0.01);
