import * as React from "react";
import { animated, SpringValues } from "@react-spring/web";

export default function Stackoverflow({ style }: { style?: SpringValues }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Stack Overflow"
      role="img"
      viewBox="0 0 512 512"
      width={40}
      style={style}
    >
      <rect width="512" height="512" rx="15%" fill="#f58025" />
      <path
        stroke="#fff"
        strokeWidth="30"
        fill="none"
        d="M293 89l90 120zm-53 50l115 97zm-41 65l136 64zm-23 69l148 31zm-6 68h150zm-45-44v105h241V297"
      />
    </animated.svg>
  );
}

Stackoverflow.defaultProps = {
  style: {},
};
