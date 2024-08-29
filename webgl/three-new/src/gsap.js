import gsap from "gsap";

const defaults = {
  duration: 1,
  ease: "expo.out",
};

gsap.defaults(defaults);

export default gsap;
export { defaults };
