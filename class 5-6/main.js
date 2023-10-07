let timeline = gsap.timeline();

const updateLoaderPercentage = () => {
  let progressValue = 0;

  setInterval(() => {
    progressValue += Math.floor(Math.random() * 15);

    if (progressValue < 100) {
      document.querySelector("#loader h1").innerHTML = progressValue + "%";
    } else {
      progressValue = 100;
      document.querySelector("#loader h1").innerHTML = progressValue + "%";
    }
  }, 150);
};

timeline.to("#loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: updateLoaderPercentage(),
});

timeline.to("#loader", {
  top: "-100vh",
  delay: 0.2,
  duration: 1.5,
});
 
gsap.to("#page1 h1", {
  transform: "translateX(-100%)",
  fontWeight: "100",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "body",
    start: "top 0",
    end: "top -200%",
    scrub: 2,
    pin: true,
  },
});
