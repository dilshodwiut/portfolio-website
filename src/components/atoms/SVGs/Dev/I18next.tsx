import * as React from "react";
import { animated, SpringValues } from "@react-spring/web";

export default function I18next({ style }: { style?: SpringValues }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="i18next"
      role="img"
      viewBox="0 0 512 512"
      width={40}
      style={style}
    >
      <path
        d="M287 154v48l54 140s17 35-31 43H202s-44-5-33-40l57-143v-48h61Zm-84 140-20 47c-9 29 28 32 28 32h90c39-6 27-33 26-34l-18-44c-47-15-87-7-106-1Zm29-47c-6 0-11 6-11 13s5 13 11 13 11-6 11-13-5-13-11-13Zm39-14c-7 0-13 7-13 15 0 9 6 16 13 16s13-7 13-16c0-8-6-15-13-15Z"
        fill="#009688"
      />
      <path
        d="M288 149h-65c-6 0-10-5-10-11 0-5 4-10 10-10h65c5 0 9 5 9 10 0 6-4 11-9 11Zm3 50v-23s30-6 44 28c0 0-22 17-44-5Zm-71 0v-23s-29-6-44 28c0 0 23 17 44-5Zm21 114c0 5-7 9-15 9-9 0-16-4-16-9s7-9 16-9c8 0 15 4 15 9Zm55 0c0 5-7 9-16 9-8 0-15-4-15-9s7-9 15-9c9 0 16 4 16 9Z"
        fill="#004d40"
      />
    </animated.svg>
  );
}

I18next.defaultProps = {
  style: {},
};
