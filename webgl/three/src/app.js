import "./style/main.css";
import Dom from "./modules/dom";
import Viewport from "./modules/viewport";
import Gl from "./gl/gl";

class App {
  constructor() {
    this.body = document.querySelector("body");
    this.viewport = new Viewport();

    this.time = 0;

    this.init();
  }

  init() {
    this.dom = new Dom();

    this.gl = new Gl();

    this.initEvents();
    // this.render()
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
    this.time += 0.1;

    window.requestAnimationFrame(this.render.bind(this));
  }

  /* Events */
}

window.app = new App();
