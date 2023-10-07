gsap.from(".page__1 .box", {
  scale: 0,
  delay: 1,
  duration: 1,
  rotation: 360,
});

gsap.from(".page__2 .box", {
  scale: 0,
  duration: 1,
  rotation: 360,
  scrollTrigger: {
    trigger: ".page__2 .box",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2, // you can give value true , false or 1 to 5 any number
  },
});
