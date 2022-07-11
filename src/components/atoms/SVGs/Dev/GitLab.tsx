import * as React from "react";
import { animated, SpringValues } from "@react-spring/web";

export default function GitLab({ style }: { style?: SpringValues }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GitLab"
      role="img"
      viewBox="0 0 512 512"
      width={40}
      style={style}
    >
      <path
        fill="#e24329"
        d="M84 215l43-133c2-7 12-7 14 0l115 353L371 82c2-7 12-7 14 0l43 133"
      />
      <path
        fill="#fc6d26"
        d="M256 435L84 215h100.4zm71.7-220H428L256 435l71.6-220z"
      />
      <path
        fill="#fca326"
        d="M84 215l-22 67c-2 6 0 13 6 16l188 137zm344 0l22 67c2 6 0 13-6 16L256 435z"
      />
    </animated.svg>
  );
}

GitLab.defaultProps = {
  style: {},
};
