document.addEventListener("DOMContentLoaded", function () {
  if (typeof Shery !== "undefined") {
    Shery.mouseFollower();
    Shery.makeMagnet(".magnet");
    Shery.hoverWithMediaCircle(".hvr", {
      videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
    });

    gsap.to(".featured-left-element", {
      scrollTrigger: {
        trigger: "#featured-images",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
      },
      y: "-300%",
      ease: Power1,
    });

    let sections = document.querySelectorAll("featured-left-element");
    if (sections.length > 0) {
      Shery.imageEffect(".images", {
        style: 4,
        config: { onMouse: { value: 1 } },
        slideStyle: (setScroll) => {
          sections.forEach(function (section, index) {
            ScrollTrigger.create({
              trigger: section,
              start: "top top",
              scrub: 1,
              onUpdate: function (prog) {
                setScroll(prog.progress + index);
              },
            });
          });
        },
      });
    }
  } else {
    console.error("Shery.js is not loaded");
  }

  ScrollTrigger.refresh();
});
