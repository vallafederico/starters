import LilGui from "lil-gui";

export class Gui extends LilGui {
  constructor() {
    super();
    this.initControllers();
    this.initWindowGui();
    window.gui = this;

    this.close();
  }

  initControllers() {
    this.val = {
      anim: {
        timeline: 0,
      },
    };
  }

  initWindowGui() {
    for (const key in this.val) {
      const fold = this.addFolder(key);
      fold.close();

      for (const key2 in this.val[key]) {
        fold.add(this.val[key], key2, 0, 1, 0.001);
      }
    }
  }
}
