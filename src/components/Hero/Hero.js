import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import icon from "../../images/pen-icon.svg";
import "./hero.css";
import StoryBookLogo from "../Logo/Logo";
const Hero = ({ small = false, heading = "Stories" }) => {
  const ref = useRef();
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
        start: "top top",
        end: "bottom top",
      },
    });
  }, []);
  return (
    <div className={`hero hero--${small}`}>
      <div className={`hero__logo hero__logo--${small}`}>
        <StoryBookLogo heading={heading} animation={true} small={small} />
      </div>
    </div>
  );
};

export default Hero;
