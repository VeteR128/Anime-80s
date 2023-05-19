gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".page",
  smooth: 1.5,
  effects: true,
});

gsap.fromTo(
  ".header__logo",
  { opacity: 1, ease: "none" },
  {
    opacity: 0,

    scrollTrigger: {
      trigger: ".header__logo",
      start: "center",
      end: "820",
      scrub: true,
    },
  }
);

let arrayone = gsap.utils.toArray(".cards__left .item");
console.log(arrayone);
arrayone.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: -150 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-1400",
        end: "-700",
        scrub: true,
      },
    }
  );
});
let arraytwo = gsap.utils.toArray(".cards__right .item");
arraytwo.forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, x: 150 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: "-1400",
        end: "-700",
        scrub: true,
      },
    }
  );
});
