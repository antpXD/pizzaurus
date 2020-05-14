import gsap from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
const tl2 = gsap.timeline({ defaults: { ease: "power3.inOut" } });

export const addPizzaAnimation = (node, done, show) => {
  tl.to(".main-pizza", {
    y: show ? 500 : 0,
    rotate: show ? 30 : 0,
    duration: 0.65,
  })
    .fromTo(
      node,
      {
        autoAlpha: show ? 0 : 1,
        x: show ? -600 : 0,
        y: show ? 1100 : 0,
        scale: show ? 11 : 1,
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: show ? 1 : 0,
        duration: show ? 1 : 0.5,
      }
    )
    .to(".main-pizza", { y: 0, rotate: 0, onComplete: done });
};
