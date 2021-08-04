import React, { useEffect, useRef } from "react";
import write from "./images/write.jpg";
import share from "./images/share.jpg";
import read from "./images/read.jpg";
import { featureAnimation, featureAnimation1 } from "../../animation/feature";
const Page2 = () => {
  const pageRef = useRef();
  const a = useRef();
  const b = useRef();
  const c = useRef();
  useEffect(() => {
    featureAnimation(pageRef, a, b, c);
  }, [a, b, c]);
  return (
    <div ref={pageRef} className="page2">
      <svg
        id="sw-js-blob-svg"
        className="blob blob_2"
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
          d="M23.3,-24.4C29.7,-17,33.8,-8.5,34.5,0.7C35.1,9.8,32.3,19.6,26,25.5C19.6,31.4,9.8,33.3,0,33.3C-9.8,33.3,-19.6,31.4,-26.5,25.5C-33.3,19.6,-37.2,9.8,-38.1,-0.9C-39,-11.6,-37,-23.3,-30.1,-30.6C-23.3,-38,-11.6,-41,-1.6,-39.5C8.5,-37.9,17,-31.7,23.3,-24.4Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          stroke-width="0"
          stroke="url(#sw-gradient)"
        ></path>{" "}
      </svg>
      <div className="blob blob_3">
        <svg
          id="sw-js-blob-svg"
          className="blob blob_3"
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
                stop-color="rgba(64.487, 170.076, 167.93, 1)"
                offset="0%"
              ></stop>{" "}
              <stop
                id="stop2"
                stop-color="rgba(39.107, 176.906, 146.094, 1)"
                offset="100%"
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path
            fill="url(#sw-gradient)"
            d="M27.3,-31.4C34.6,-26.5,39.1,-17.1,40.4,-7.5C41.7,2.2,39.8,12,34.7,19.2C29.6,26.4,21.3,31,12.4,34.3C3.6,37.6,-5.8,39.7,-14.5,37.5C-23.2,35.3,-31.1,29,-34.8,20.9C-38.4,12.9,-37.8,3.2,-35.4,-5.6C-33.1,-14.3,-29.1,-22.1,-22.9,-27.2C-16.7,-32.3,-8.3,-34.7,0.8,-35.7C10,-36.8,20.1,-36.3,27.3,-31.4Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
          ></path>{" "}
        </svg>
      </div>
      <div className="page2__left">
        <div className="page2__landing-image">
          <img src={write} className="page2__feature-image" alt="Write" />
          <img src={share} className="page2__feature-image" alt="Write" />
          <img src={read} className="page2__feature-image" alt="Write" />
        </div>
      </div>
      <div className="page2__divider-line"></div>
      <div className="page2__right">
        <div className="page2__right__text" ref={a}>
          Write
        </div>
        <div className="page2__right__text" ref={b}>
          Share
        </div>
        <div className="page2__right__text" ref={c}>
          Read
        </div>
      </div>
    </div>
  );
};

export default Page2;
