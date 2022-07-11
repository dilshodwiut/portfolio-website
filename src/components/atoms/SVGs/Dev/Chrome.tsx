import * as React from "react";
import { animated, SpringValues } from "@react-spring/web";

export default function Chrome({ style }: { style?: SpringValues }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chrome"
      role="img"
      viewBox="0 0 512 512"
      width={40}
      style={style}
    >
      <path d="M256 140h228A256 256 0 0 1 244 511.7" fill="#fc4" />
      <path d="M357 314 244 511.7A256 256 0 0 1 40 118" fill="#0f9d58" />
      <path d="M256 140h228A256 256 1 0 0 40 118L155 314" fill="#db4437" />
      <circle
        cx="256"
        cy="256"
        r="105"
        fill="#4285f4"
        stroke="#f1f1f1"
        strokeWidth="24"
      />
    </animated.svg>
  );
}

Chrome.defaultProps = {
  style: {},
};
