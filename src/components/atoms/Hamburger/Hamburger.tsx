import * as React from "react";
import { useHamburgerContext } from "src/contexts/HamburgerContext";
import { useSpring, animated, config } from "@react-spring/web";
import clsx from "clsx";
import classes from "./Hamburger.module.scss";

export default function Hamburger() {
  const { isOpen, setIsOpen } = useHamburgerContext();

  const [spring, api] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(-50%)",
    config: { ...config.molasses, duration: 1000 },
  }));

  React.useEffect(() => {
    api.start({
      opacity: 1,
      transform: "translateY(0%)",
    });

    return () => {
      api.stop();
    };
  }, [api]);

  /* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
  return (
    <animated.button
      type="button"
      className={clsx(classes.hamburger, isOpen ? classes.open : "")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </animated.button>
  );
}
