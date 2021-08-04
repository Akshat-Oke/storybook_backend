import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export function featureAnimation(r, a, b, c) {
  var totalDuration = 5000;

  gsap.to(".page2__divider-line", {
    duration: 1,
    height: "60vh",
    // backgroundColor: "red",
    ease: "none",
    scrollTrigger: {
      trigger: ".page2",
      scrub: true,
      start: "top top",
      end: "bottom top",
      // pin: r.current,
    },
  });
  var headlines = gsap.utils.toArray(".page2__right__text");
  const images = gsap.utils.toArray(".page2__feature-image");
  gsap.set(images, { autoAlpha: 0 });

  var singleDuration = totalDuration / headlines.length;

  headlines.forEach((elem, i) => {
    const smallTimeline = gsap.timeline();
    const img = images[i];
    ScrollTrigger.create({
      trigger: ".page2",
      start: "top -=" + singleDuration * i,
      end: "+=" + singleDuration,
      animation: smallTimeline,
      toggleActions:
        i !== 3 ? "play reverse play reverse" : "play none play reverse",
    });
    smallTimeline
      .to(
        elem,
        {
          duration: 0.25,
          scale: 1.3,
          color: "red",
        },
        0
      )
      .fromTo(
        img,
        { translateX: -60, yPercent: -50 },
        { duration: 0.25, autoAlpha: 1, yPercent: -50, translateX: 0 },
        0
      );
    //.to(elem,{ duration: 0.25, fontSize: "30px", color: "black"})
  });

  ScrollTrigger.create({
    trigger: ".page2",
    start: "top top",
    end: "+=" + totalDuration,
    // markers: true,
    pin: true,
  });
}

export function featureAnimation2(r) {
  gsap.set(".page2__landing-image img", {
    autoAlpha: 0,
  });
  const headlines = gsap.utils.toArray(".page2__right__text");
  console.log("length is ", headlines.length);
  var totalDuration = 1000;
  var singleDuration = totalDuration / headlines.length;
  gsap.to(".page2__divider-line", {
    duration: 1,
    height: "60vh",
    backgroundColor: "red",
    ease: "none",
    scrollTrigger: {
      trigger: r.current,
      scrub: true,
      start: "top top",
      end: "bottom top",
      markers: true,
      pin: r.current,
    },
  });
  const tl = gsap.timeline({});
  ScrollTrigger.create({
    trigger: r.current,
    animation: tl,
    // scrub: true,
    start: "top top",
    // end: "",
    // pin: r.current,
    markers: true,
  });
  // tl.scrollTrigger.refresh();

  headlines.forEach((ele, index) => {
    tl.to(ele, { color: "teal", duration: 0.2 }, `+=${index / 3}`);
  });
}
export function featureAnimation1() {
  gsap.set(".page2__landing-image img", {
    autoAlpha: 0,
  });
  const headlines = gsap.utils.toArray(".page2__right__text");
  var totalDuration = 1000;
  var singleDuration = totalDuration / headlines.length;
  const lineTimeline = gsap.timeline();
  ScrollTrigger.create({
    trigger: ".page2",
    start: "top top",
    end: "+=" + totalDuration,
    //markers: true,
    pin: true,
    scrub: true,
    animation: lineTimeline,
  });
  lineTimeline
    .to(".page2__divider-line", { duration: 1 }, 0)
    .to(
      ".page2__divider-line",
      { duration: 0.9, height: "60vh", ease: "none" },
      0
    );
  headlines.forEach((elem, i) => {
    console.log("loop");
    const smallTimeline = gsap.timeline();
    // const content = document.querySelector(".page2__landing-image");
    const relevantContent = document.querySelectorAll(".page2__feature-image")[
      i
    ];

    ScrollTrigger.create({
      trigger: ".page2",
      start: "top -=" + singleDuration * i,
      end: "+=" + singleDuration,
      markers: true,
      animation: smallTimeline,
      toggleActions: "play reverse play reverse",
    });

    smallTimeline
      //.to(elem,{ duration: 0.25, fontSize: "40px", color: "orange"}, 0)
      .to(elem, { duration: 0.25, color: "red" }, 0)
      .to(elem, { duration: 0.25, scale: 1.2 }, 0);
    // .to(relevantContent, { duration: 0.25, y: 0, autoAlpha: 1 }, 0);
  });
}
