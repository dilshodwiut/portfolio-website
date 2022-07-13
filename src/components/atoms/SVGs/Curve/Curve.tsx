import clsx from "clsx";
import * as React from "react";
import classes from "./Curve.module.scss";

interface CurveProps {
  position: "top" | "bottom";
  rotate?: boolean;
  fill?: string;
  style?: React.CSSProperties;
}

export default function Curve({ position, fill, rotate, style }: CurveProps) {
  return (
    <div
      className={clsx(
        classes.curve,
        position === "top" ? classes.top : classes.bottom
      )}
      style={style}
    >
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={rotate ? classes.rotate : ""}
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

Curve.defaultProps = {
  rotate: false,
  fill: "#1e1e1e",
  style: {},
};
