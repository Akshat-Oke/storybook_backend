import React, { useEffect, useRef } from "react";
import "./home.css";
import hoverEffect from "hover-effect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import openBook from "./images/pink_guy.jpg";
import social from "./images/pink_girl.jpg";
import { textScrollAnimation } from "../../animation/text";
import Page2 from "./Page2";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageDivRef = useRef();
  const headerDivRef = useRef();
  const yourRef = useRef();
  const textRef = useRef();
  const overlayFlipRef = useRef();
  const textAnimation = () => {
    const tl = gsap.timeline();
    // const split = new SplitText(headerDivRef.current, { type: "chars" });
    const chars =
      headerDivRef.current !== undefined &&
      headerDivRef.current.getElementsByTagName("span");
    if (chars) {
      gsap.set(headerDivRef.current, { perspective: 400 });
      tl.from(
        chars,
        {
          duration: 1,
          opacity: 0,
          scale: 0,
          y: 80,
          rotationX: 180,
          transformOrigin: "0% 50% -50",
          ease: "back",
          stagger: 0.1,
        },
        "+=0.3"
      )
        .from(
          textRef.current,
          {
            duration: 0.5,
            opacity: 0,
          },
          "+=0.5"
        )
        .to(
          yourRef.current,
          {
            duration: 0.3,
            scaleY: 0.08,
          },
          "+=0.3"
        )
        .to(yourRef.current, {
          duration: 0.5,
          scaleY: 1.5,
          scaleX: 1.5,
          color: "var(--color-primary)",
        });
    }
  };
  const scrollAnimation = () => {
    const pages = gsap.utils.toArray(".page");
    gsap.fromTo(
      overlayFlipRef.current,
      {
        autoAlpha: 0,
        x: "100vw",
      },
      {
        duration: 1,
        autoAlpha: 1,
        x: "-100vh",
        scrollTrigger: {
          trigger: pages,
          pin: true,
          scrub: true,
        },
      }
    );
  };
  useEffect(() => {
    const anim = new hoverEffect({
      parent: document.querySelector(".landing-image"),
      intensity: 0.2,
      image1: openBook,
      image2: social,
      speedIn: 1.2,
      speedOut: 1.6,
      displacementImage: social,
    });
    textAnimation();
    // scrollAnimation();
    textScrollAnimation();
  }, []);

  return (
    <div>
      {/* <div className="overlay-flip" ref={overlayFlipRef}></div> */}
      <div className="page page1">
        <svg
          id="sw-js-blob-svg"
          className="blob blob_1"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              {" "}
              <stop
                id="stop1"
                stop-color="rgba(51.944, 160.969, 158.753, 1)"
                offset="0%"
              ></stop>{" "}
              <stop
                id="stop2"
                stop-color="rgba(24.315, 186.013, 149.857, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M28.1,-32.8C35.5,-27.2,40.2,-17.5,41.9,-7.4C43.7,2.7,42.6,13.4,37.9,22.1C33.1,30.8,24.6,37.5,15.6,39.3C6.5,41.1,-3.1,37.9,-12.9,34.7C-22.8,31.5,-33,28.2,-37.9,21.2C-42.8,14.2,-42.4,3.4,-39.7,-6.1C-36.9,-15.6,-31.8,-23.7,-24.8,-29.4C-17.8,-35.2,-8.9,-38.5,0.7,-39.3C10.3,-40.1,20.6,-38.5,28.1,-32.8Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
          ></path>{" "}
        </svg>
        <div className="home__background1"></div>
        <div className="home__left">
          <div className="home__heading-wrapper">
            <h1
              className="home__heading title-text animation-text"
              ref={headerDivRef}
            >
              <span>S</span>
              <span>t</span>
              <span>o</span>
              <span>r</span>
              <span>y</span>
              <span>B</span>
              <span>o</span>
              <span>o</span>
              <span>k</span>
            </h1>
          </div>
          <div className="home__heading-text" ref={textRef}>
            <div>
              <div className="animation-text animate-text-scroll">
                <span>N</span>
                <span>o</span>
                <span>t</span>
                <span className="word-space"></span>
                <span>j</span>
                <span>u</span>
                <span>s</span>
                <span>t</span>
                <span className="word-space"></span>
                <span>a</span>
                <span>n</span>
                <span>y</span>
                <span className="word-space"></span>
                <span>s</span>
                <span>t</span>
                <span>o</span>
                <span>r</span>
                <span>y</span>
              </div>
              <div className="animation-text animate-text-scroll">
                <span>I</span>
                <span>t</span>
                <span>'</span>
                <span>s</span>
                <span>
                  <span className="word-space"> </span>
                </span>
                <span>Y</span>
                <span>O</span>
                <span>U</span>
                <span>R</span>
                <span>
                  <span className="word-space"> </span>
                </span>
                <span>s</span>
                <span>t</span>
                <span>o</span>
                <span>r</span>
                <span>y</span>
              </div>
              {/* <div className="home__heading-your" ref={yourRef}>
                YOUR
              </div>{" "}
              story */}
            </div>
          </div>
        </div>
        <div className="home__right">
          <div ref={imageDivRef} className="landing-image"></div>
        </div>
      </div>
      {/* <div style={{ height: "100vh" }}></div> */}
      <Page2 />
    </div>
  );
};

export default Home;
