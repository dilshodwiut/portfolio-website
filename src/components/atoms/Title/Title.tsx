import * as React from "react";
import { useSpring, animated } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import clsx from "clsx";
import classes from "./Title.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  align?: "left" | "center" | "right";
  noMargin?: boolean;
  noPadding?: boolean;
  animate?: boolean;
  style?: React.CSSProperties | { [key: string]: string };
  side?: "top" | "right" | "bottom" | "left";
};

export default function Title(props: Props) {
  const {
    children,
    className,
    size,
    align,
    noMargin,
    noPadding,
    style,
    animate,
    side,
  } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isVisible = !!entry?.isIntersecting;

  const spring = useSpring({
    from: { opacity: 0, transform: calculateInitialPosition(side!) },
    to: {
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? "translate(0%, 0%)"
        : calculateInitialPosition(side!),
    },
  });

  const extraProps = animate
    ? spring
    : { opacity: 1, transform: "translate(0%, 0%)" };

  return (
    <animated.h1
      ref={ref}
      className={clsx(
        classes.title,
        className,
        `text-${align}`,
        size,
        noMargin ? classes.noMargin : classes.margin,
        noPadding ? classes.noPadding : classes.padding
      )}
      style={{ ...style, ...extraProps }}
    >
      {children}
    </animated.h1>
  );
}

Title.defaultProps = {
  className: "",
  size: "lg",
  align: "center",
  noMargin: false,
  noPadding: false,
  style: {},
  animate: true,
  side: "",
};

function calculateInitialPosition(side: string) {
  switch (side) {
    case "top":
      return "translate(0%, -50%)";
    case "right":
      return "translate(50%, 0%)";
    case "bottom":
      return "translate(0%, 50%)";
    case "left":
      return "translate(-50%, 0%)";
    default:
      return "translate(0%, 0%)";
  }
}
