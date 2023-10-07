let timeline = gsap.timeline();

timeline.from("nav", {
  opacity: 0,
  delay: 0.5,
});

timeline.from("#logo,#navbar,#btn", {
  y: -80,
  opacity: 0,
  duration: 0.8,
  stagger: 0.3,
});

timeline.from(".animation__left", {
  x: -500,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

timeline.from(".top_right_img", {
  scale: 0.5,
  opacity: 0,
  duration: 0.5,
});

gsap.from("#page__2 .box", {
  scale: 0,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#page__2 .box",
    scroller: "body",
    markers: true,
    start: "top 70%",
  },
});
