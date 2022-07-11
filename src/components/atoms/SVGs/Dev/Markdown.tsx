import * as React from "react";
import { animated, SpringValues } from "@react-spring/web";

export default function Markdown({ style }: { style?: SpringValues }) {
  return (
    <animated.svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Markdown"
      role="img"
      viewBox="0 0 512 512"
      width={40}
      style={style}
    >
      <path d="M410,366H102C88,366 76,354 76,340V170c0,-14 12,-26 26,-26h307c14,0 26,12 26,26v170c0,14 -11,26 -25,26zM102,162c-4,0 -9,4 -9,9v170c0,5 4,9 9,9h307c5,0 9,-4 9,-9V170c0,-5 -4,-9 -9,-9 1,0 -307,0 -307,0zm26,153V196h34l34,43 34,-43H265V314h-34v-68l-34,43 -34,-43v68zm216,0 -52,-57h34v-61h34v60h34z" />
    </animated.svg>
  );
}

Markdown.defaultProps = {
  style: {},
};
