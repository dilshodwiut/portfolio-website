import * as React from "react";
import { animated, SpringValues } from "@react-spring/web";

export default function ReactIcon({ style }: { style?: SpringValues }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="React"
      role="img"
      viewBox="0 0 512 512"
      width={40}
      style={style}
    >
      <circle cx="256" cy="256" r="36" fill="#61dafb" />
      <path
        stroke="#61dafb"
        strokeWidth="18"
        fill="none"
        d="M317.47 291.43a71 183 30 1 0-.05.09zm-122.89.09a183 71 60 1 0-.05-.09zm61.47 35.43a183 71 0 1 0-.1 0z"
      />
    </animated.svg>
  );
}

ReactIcon.defaultProps = {
  style: {},
};
