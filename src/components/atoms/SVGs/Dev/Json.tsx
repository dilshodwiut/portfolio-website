import * as React from "react";

export default function Json() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="JSON"
      role="img"
      viewBox="0 0 512 512"
      width={32}
    >
      <rect width="512" height="512" rx="15%" fill="#fff" />
      <linearGradient id="a" x1=".175" y1=".15" x2="1" y2=".85">
        <stop offset="0" />
        <stop offset="1" stopColor="#fff" />
      </linearGradient>
      <path
        id="b"
        fill="url(#a)"
        d="M256 64c-99 0-192 81-192 192 0 123 102 192 192 192-21 0-125-23-125-166 0-89 73-139 125-119 0 0 56 21 56 93s-56 93-56 93c51 20 125-27 125-119 0-129-87-166-125-166z"
      />
      <use transform="rotate(180 256 256)" href="#b" />
    </svg>
  );
}
