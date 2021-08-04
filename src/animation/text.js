import { gsap } from "gsap";

export function textScrollAnimation() {
  const pages = gsap.utils.toArray(".page");
  pages.forEach((page) => {
    const texts = page.querySelectorAll(".animate-text-scroll");
    const tl = gsap.timeline({
      scrollTrigger: {
        anticipatePin: 0.7,
        trigger: page,
        pin: true,
        scrub: 1,
        start: "top top",
        end: "bottom top",
        pinSpacing: "margin",
        // markers: true,
      },
      onComplete: () => {
        // gsap.set(page, { x: 14 });
        console.log("Complete");
      },
    });
    texts.forEach((ele, index) => {
      tl.from(
        ele.getElementsByTagName("span"),
        {
          // delay: index / 3,
          duration: 10,
          autoAlpha: 0,
          y: -10,
          stagger: 0.8,
          // scrollTrigger: {
          //   pin: page,
          //   trigger: page,
          //   scrub: true,
          //   start: "top top",
          //   end: "bottom top",
          //   markers: true,
          // },
        },
        `+=${index}`
      ).set({}, {}, "+=2");
    });
  });
}
