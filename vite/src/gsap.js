import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const def = {
  duration: 1,
  ease: "expo.out",
};

gsap.defaults(def);

const utils = {};

export default gsap;
export { def, utils, ScrollTrigger, SplitText };
