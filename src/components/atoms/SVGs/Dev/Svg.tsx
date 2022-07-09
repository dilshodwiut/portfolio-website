import * as React from "react";

export default function Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SVG"
      role="img"
      viewBox="0 0 512 512"
      width={32}
    >
      <rect width="512" height="512" rx="15%" fill="#f90" />
      <path d="M122 157h268v99H122" />
      <g id="a" fill="#fff" stroke="#000" strokeWidth="24">
        <circle cx="256" cy="120" r="44" />
        <circle cx="120" cy="256" r="44" />
        <circle cx="160" cy="160" r="44" />
      </g>
      <use href="#a" transform="matrix(-1 0 0 1 512 0)" />
      <path
        stroke="#fff"
        strokeWidth="44"
        d="M396 256H256l96-96-96 96V120v136l-96-96 96 96H116"
      />
      <path d="M64.1 256h384v170a22 22 0 01-22 22h-340a22 22 0 01-22-22V256" />
      <path
        fill="none"
        stroke="#fff"
        strokeWidth="30"
        d="M191 318a35 35 0 10-35 35 35 35 0 11-35 35m171-125l-36 172-36-172m-29 55a35 35 0 10-35 35 35 35 0 11-35 35m270-70a35 35 0 00-35-35 35 35 0 00-35 35v70a35 35 0 0035 35 35 35 0 0035-35v-35h-35"
      />
      <path d="M64 256h384v12H64" />
    </svg>
  );
}
