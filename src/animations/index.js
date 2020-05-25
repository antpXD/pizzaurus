import gsap from "gsap";

const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

export const addPizzaAnimationOnBigScreen = (node, done, show) => {
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
        onComplete: done,
      }
    )
    .to(".main-pizza", {
      y: 0,
      rotate: 0,
      onStart: () =>
        document.querySelector("#confirmOrder") &&
        (document.querySelector("#confirmOrder").disabled = false),
      onComplete: done,
    });
};
export const addPizzaAnimationOnSmallScreen = (node, done, show) => {
  tl.to(".main-pizza", {
    y: show ? 1000 : 0,
    rotate: 0,
    scale: show ? 0.6 : 1.2,
    duration: 1,
  })
    .fromTo(
      node,
      {
        autoAlpha: 1,
        x: -100,
        y: show ? 1500 : 0,
        scale: show ? 11 : 1,
        duration: 1.2,
      },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: show ? 1 : 0,
        duration: show ? 1 : 0.5,
        onComplete: done,
      }
    )
    .to(".main-pizza", {
      y: 0,
      rotate: 0,
      scale: 1,
      duration: 1,
      delay: 0.2,
      onStart: () =>
        document.querySelector("#confirmOrder") &&
        (document.querySelector("#confirmOrder").disabled = false),
      onComplete: done,
    });
};
