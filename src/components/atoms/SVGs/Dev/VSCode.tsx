import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";
import colors from "src/theme/palette";

export default function VSCode() {
  const [{ transform }, setSpring] = useSpring(() => ({
    from: { transform: "translate(0px, 0px)" },
    config: { ...config.molasses, duration: 5000 },
  }));

  React.useEffect(() => {
    let x = 0;
    let y = 0;
    setInterval(() => {
      x = Math.random() * 100;
      y = Math.random() * 100;
      setSpring.start({ transform: `translate(${x}px, ${y}px)` });
    }, 5000);
    setSpring.start({
      transform: `translate(${Math.random() * 100}px, ${
        Math.random() * 440
      }px)`,
    });
  }, [setSpring]);

  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Visual Studio Code"
      role="img"
      viewBox="0 0 512 512"
      style={{ transform }}
      width={32}
    >
      {/* <rect width="512" height="512" rx="15%" fill={colors.black} /> */}
      <filter id="a">
        <feFlood floodOpacity="0" result="b" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .25 0" />
        <feBlend in2="b" result="c" />
        <feBlend in="SourceGraphic" in2="c" />
      </filter>
      <path
        fill="#27b"
        d="m423 114-75-37a23 23 0 0 0-26 5L77 306a15 15 0 0 0 0 22l20 18a15 15 0 0 0 20 1l295-224c10-7 24-1 24 12v-1c0-9-5-17-13-20"
      />
      <path
        fill="#08c"
        d="m423 399-75 36a23 23 0 0 1-26-5L77 207a15 15 0 0 1 0-22l20-19a15 15 0 0 1 20-1l295 224c10 8 24 1 24-12v1c0 9-5 17-13 21"
        filter="url(#a)"
      />
      <path
        fill="#19f"
        d="M348 435a23 23 0 0 1-26-5c9 9 23 3 23-9V92c0-12-14-19-23-10a23 23 0 0 1 27-4l75 36c7 3 12 11 12 20v244c0 9-5 17-12 21"
      />
    </animated.svg>
  );
}
