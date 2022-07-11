import * as React from "react";
import { animated } from "@react-spring/web";

export default function Linux({ style }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Linux"
      role="img"
      viewBox="0 0 512 512"
      fill="#333"
      width={32}
      style={style}
    >
      <g transform="matrix(2 0 0 2 256 256)">
        <path d="M-32-25c-3 7-24 29-22 51 8 92 36 30 78 53 0 0 75-42 15-110-17-24-2-43-13-59s-30-17-44-2 6 37-14 67" />
        <path
          d="M42 21s9-18-8-31c16 17 6 32 6 32h-3C36-13 27 6 14-56 29-73 0-88 0-60h-9c1-24-20-12-8 5-1 37-23 52-23 78-7-18 6-32 6-32s-18 15-7 37 31 17 17 27c22 15 56 5 55-27 1-8 22-5 24-3s-3-4-13-4m-56-78c-7-2-5-11-2-11s8 7 2 11m19 1c-5-7-1-14 4-13s5 13-4 13"
          fill="#eee"
        />
        <g fill="#fc2" stroke="#333" strokeWidth="1">
          <path d="M-41 31l21 30c11 7 5 35-25 21-17-5-31-4-33-13s4-10 3-14c-4-22 14-11 19-22s5-16 15-2M71 45c-4-6 0-17-14-16-6 12-23 24-24 0-10 0-3 24-7 35-9 27 17 29 28 16l26-18c2-3 5-6-9-17m-92-92c-3-6 11-14 16-14s12 4 19 6 4 9 2 10S3-35-5-35s-10-8-16-12" />
          <path d="M-21-48c8 6 17 11 35-3" />
        </g>
        <path d="M-10-54c-2 0 1-2 2-1m7 1c1-1-1-2-3-1" />
      </g>
    </animated.svg>
  );
}
