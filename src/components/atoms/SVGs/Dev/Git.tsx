import * as React from "react";
import { animated } from "@react-spring/web";

export default function Git({ style }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Git"
      role="img"
      viewBox="0 0 512 512"
      width={32}
      style={style}
    >
      <path
        fill="#f05133"
        d="M440.8 238.9L273 71.2a24.7 24.7 0 0 0-35 0l-34.8 34.9 44.2 44.1a29.4 29.4 0 0 1 37.2 37.5l42.5 42.5a29.4 29.4 0 1 1-17.6 16.6l-39.7-39.7v104.5a29.4 29.4 0 1 1-24.2-.9V205.3a29.4 29.4 0 0 1-16-38.6l-43.5-43.5-115 115a24.7 24.7 0 0 0 0 34.9L239 440.8a24.7 24.7 0 0 0 35 0l166.9-167a24.7 24.7 0 0 0 0-34.9"
      />
    </animated.svg>
  );
}
