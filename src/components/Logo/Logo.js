import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./logo.css";
/**
 * Show the StoryBook logo
 * @param {Object} props
 * @param {String} props.heading Display heading animation
 * @param {boolean} props.animation Whether to show animation
 * @param {boolean} props.small Make logo small
 * @returns
 */
const StoryBookLogo = ({ heading, animation = false, small = false }) => {
  const storyRef = useRef();
  const parentRef = useRef();
  const titleRef = useRef();
  useEffect(() => {
    gsap.set(".storybook-logo__title .js-anim", {
      autoAlpha: 0,
      xPercent: -100,
    });
    if (animation) {
      const tl = gsap.timeline();
      tl.to(titleRef.current, {
        delay: 0.3,
        duration: 1,
        repeat: 1,
        yoyo: true,
        autoAlpha: 1,
        ease: "power3.out",
        display: "block",
        xPercent: 0,
        x: 10,
      }).to(storyRef.current, {
        duration: 1,
        autoAlpha: 1,
        ease: "power3.out",
        display: "block",
        xPercent: 0,
        x: 10,
      });
    } else {
      const tl = gsap.timeline();
      tl.to(titleRef.current, {
        duration: 1,
        autoAlpha: 1,
        ease: "power3.out",
        display: "block",
        xPercent: 0,
        x: 10,
      });
    }
  }, [animation]);
  return (
    <div className="storybook-logo" ref={parentRef}>
      <div className="storybook-logo__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 50.483999999999995 88.44800000000001"
          enable-background="new 0 0 100 100"
          // xml:space="preserve"
          width="50.483999999999995"
          height="88.44800000000001"
          // style="position: absolute; inset: 0px; width: 39.9543px; height: 70px; display: block; margin: auto;"
        >
          <defs>
            <linearGradient
              spreadMethod="pad"
              id="logo-gradient"
              x1="0%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop
                offset="0"
                style={{ stopColor: "rgb(0, 0, 0)", stopOpacity: 1 }}
              />
              <stop
                offset="27%"
                style={{ stopColor: "rgb(0, 0, 0)", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "rgb(2, 236, 58)", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            transform="translate(-24.758,-5.776)"
            d="M66.327,94.224h-32.67l2.847,-10.396h26.975zM54.383,5.776h-8.688l-20.937,50.578l11.984,25.5h26.5l12,-25.484zM61.32,78.86h-22.577l-10.704,-22.584l19.621,-47.416h0.833v42.312c-1.043,0.544 -1.763,1.623 -1.763,2.882c0,1.801 1.461,3.262 3.264,3.262c1.801,0 3.262,-1.461 3.262,-3.262c0,-1.259 -0.72,-2.338 -1.763,-2.882v-42.312h0.834l19.635,47.417z"
            // fill="#000000"
            className="fill c1"
          ></path>
        </svg>
      </div>
      {/* <div className="storybook-logo__line"></div> */}
      <div className={`storybook-logo__title title--${small}`}>
        <h2 className="storybook-logo__title--hidden">{heading}</h2>
        <h2 className="js-anim" ref={titleRef}>
          StoryBook
        </h2>
        <h2 className="js-anim" ref={storyRef}>
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default StoryBookLogo;
