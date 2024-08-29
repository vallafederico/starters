import { Gl } from "./gl/gl";
import { Gui } from "./gui";
import gsap from "@src/gsap";
import { handleResize } from "./gl/utils";

class App {
  static time = 0;
  static body = document.querySelector("body");
  static gl = Gl;

  static {
    this.initEvents();
    gsap.ticker.add(this.render.bind(this));
  }

  static init() {}

  static initEvents() {
    handleResize(this.body, this.resize.bind(this));
  }

  static resize({ contentRect }) {}

  static render(t) {
    Gl.render(t);
  }

  /* Events */
}

App.init();
