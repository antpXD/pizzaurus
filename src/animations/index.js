import gsap from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
const tl2 = gsap.timeline({ defaults: { ease: "power4.inOut" } });

export const pizzaAnimation = (node, done, show) => {
  tl.to(".main-pizza", {
    y: show ? 500 : 0,
    rotate: show ? 30 : 0,
    duration: 0.65,
  })
    .fromTo(
      node,
      { x: show ? -600 : 0, y: show ? 1100 : 0, scale: show ? 11 : 1 },
      {
        x: 0,
        y: 0,
        scale: show ? 1 : 0,
        duration: show ? 1 : 0.5,
      }
    )
    .to(".main-pizza", { y: 0, rotate: 0, onComplete: done });
};

export const emptyOrderAnimation = (node, done) => {
  tl2.fromTo(
    node,
    { autoAlpha: 0, duration: 2, delay: 1, onComplete: done },
    { autoAlpha: 1, duration: 1 }
  );
};

export const dropIngredients = {
  from: { y: -300, scale: 4, opacity: 0 },
  to: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.11, 0, 0.5, 0] },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.6, ease: [0.11, 0, 0.5, 0] },
  },
};

export const fadeIn = {
  from: { opacity: 0 },
  to: { opacity: 1 },
  exit: { opacity: 0 },
};

export const test = {
  from: { y: 0 },
  to: { y: 300 },
  exit: { y: 300 },
};
