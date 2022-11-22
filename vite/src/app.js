import "./style/main.css";

import Dom from "./modules/dom";
import Viewport from "./modules/viewport";
import Scroll from "./modules/scroll";
import Pages from "./modules/pages";

class App {
  constructor() {
    this.body = document.querySelector("body");
    this.viewport = new Viewport();

    this.time = 0;

    this.init();
  }

  init() {
    this.scroll = new Scroll();
    this.pages = new Pages();
    this.dom = new Dom();

    this.initEvents();
    this.render();
  }

  initEvents() {
    // prettier-ignore
    new ResizeObserver((entry) => this.resize(entry[0])).observe(this.body);
  }

  resize({ contentRect }) {
    this.viewport?.resize();
    this.dom?.resize();
  }

  render() {
    // this.time += 0.1;
    this.scroll?.render();

    window.requestAnimationFrame(this.render.bind(this));
  }

  /* Events */
}

window.app = new App();
