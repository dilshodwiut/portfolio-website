import * as React from "react";
import { animated, SpringValues } from "@react-spring/web";

export default function TypeScript({ style }: { style?: SpringValues }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TypeScript"
      role="img"
      viewBox="0 0 512 512"
      width={40}
      style={style}
    >
      <rect width="512" height="512" rx="15%" fill="#3178c6" />
      <path
        fill="#fff"
        d="m233 284h64V243H118v41h64v183h51zm84 173c18.03 9.21 42.31 12.5 64 12.5 18.7 0 42.93-2.43 62-14.4 8.1-5.3 15-12 19-21s7.1-19 7.1-32c-.09-41.15-29.29-54.79-58.1-68-13.08-5.95-42.5-15.56-42.5-34.1 0-14.94 16.81-22.53 38.2-22.6 16.68 0 39.1 5.43 53 15.64v-47c-18.77-7.21-38.44-8.56-56-8.6-49.25 0-87.66 20.32-88 66.8.49 35.11 21.32 50.44 52 65 16.71 7.56 47.57 17.24 47.8 38.2-.73 19.57-24.58 22.55-38.4 22.7-21.56 0-44.36-8.19-60.1-21.14z"
      />
    </animated.svg>
  );
}

TypeScript.defaultProps = {
  style: {},
};
