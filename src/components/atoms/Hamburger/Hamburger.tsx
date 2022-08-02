import * as React from "react";
import { useHamburgerContext } from "src/contexts/HamburgerContext";
import { useSpring, animated, config } from "@react-spring/web";
import clsx from "clsx";
import classes from "./Hamburger.module.scss";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useHamburgerContext();

  const spring = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-50%)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0%)",
    },
  });

  /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
  return (
    <animated.div
      className={clsx(classes.hamburger, isOpen ? classes.open : "")}
      onClick={() => setIsOpen(!isOpen)}
      style={spring}
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </animated.div>
  );
}
