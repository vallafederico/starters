export default class {
  constructor() {
    this.resize();
  }

  resize() {
    // set CSS vh var
    document.documentElement.style.setProperty(
      "--100vh",
      `${window.innerHeight}px`
    );
  }
}
