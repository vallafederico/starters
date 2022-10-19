import { Observe } from "../../util/observe";

export class Text extends Observe {
  constructor({ element }) {
    super({
      element,
      config: {
        root: null,
        margin: "10px",
        threshold: 0.8,
      },
    });
  }

  isIn() {
    console.log("text in");
  }

  isOut() {
    console.log("text out");
  }
}
